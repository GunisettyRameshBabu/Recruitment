import { Component, ViewChild } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { MatDialog } from '@angular/material/dialog';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';
import { UsersessionService } from './services/usersession.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'QubeSmart';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  @ViewChild('childModal') childModal;
  public spinkit = Spinkit;

  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private userSession: UsersessionService
  ) {
    if (this.userSession.checkUserLoggedIn()) {
      // sets an idle timeout of 5 seconds, for testing purposes.
      idle.setIdle(300);
      // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
      idle.setTimeout(30);
      // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
      idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

      idle.onIdleEnd.subscribe(() => {
        this.idleState = 'No longer idle.';
        console.log(this.idleState);
        this.reset();
      });

      idle.onTimeout.subscribe(() => {
        this.idleState = 'Timed out!';
        this.timedOut = true;
        console.log(this.idleState);
        this.router.navigate(['/']);
      });

      idle.onIdleStart.subscribe(() => {
        this.idleState = "You've gone idle!";
        console.log(this.idleState);
        this.childModal.show();
      });

      idle.onTimeoutWarning.subscribe((countdown) => {
        this.idleState = 'You will time out in ' + countdown + ' seconds!';
        if (countdown == 1) {
          this.logout();
        }
      });

      // sets the ping interval to 15 seconds
      keepalive.interval(15);

      keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

      this.reset();
    }
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
    if (this.childModal != undefined) {
      this.childModal.hide();
    }
  }

  stay() {
    this.reset();
    this.childModal.hide();
  }

  logout() {
    this.userSession.signOutSession();
    this.childModal.hide();
  }

  hideChildModal() {
    this.stay();
  }
}
