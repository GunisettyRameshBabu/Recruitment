import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobopeningsComponent } from './components/jobopenings/jobopenings.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'jobopenings',
    component : JobopeningsComponent,
    canActivate : [AuthGuard]
  }
  ,
  {
    path : 'jobdetails/:jobid',
    component : JobdetailsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'jobdetails/:jobid',
    component : JobdetailsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'unauth',
    component : UnAuthorizedComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
