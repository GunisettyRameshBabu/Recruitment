import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiEndPoints } from 'src/app/constants/api-end-points';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Opening } from './opening';
import { JobService } from 'src/app/services/job.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersessionService } from 'src/app/services/usersession.service';

@Component({
  selector: 'app-add-openings',
  templateUrl: './add-openings.component.html',
  styleUrls: ['./add-openings.component.css'],
})
export class AddOpeningsComponent implements OnInit {
  industries = [];
  countries = [];
  cities: any = [];
  states: any = [];
  clients = [];
  jobtypes = [];
  experiences = [];
  statuses = [];
  jobGroup: FormGroup;
  id: number;
  user: User;
  candidates = [];
  users = [];
  usersList = [];
  job;

  constructor(
    private commonService: CommonService,
    private jobService: JobService,
    private alertService: ToastrService,
    private router: Router,
    private activated: ActivatedRoute,
    private userSession: UsersessionService
  ) {}

  ngOnInit(): void {
    this.user = this.userSession.getLoggedInUser() as User;
    this.activated.params.subscribe((res: any) => {
      this.id = +res.id;
    });
    if (this.id != undefined && this.id > 0) {
      this.jobService
        .getJobForEdit(this.id)
        .subscribe((res: ServiceResponse) => {
          if (res.success) {
            this.job = res.data;
            this.jobGroup.reset(res.data);
            this.jobService
              .getJobCandidates(res.data.jobid)
              .subscribe((res1: ServiceResponse) => {
                this.candidates = res1.data;
              });
            this.countryChanged(false);
            this.stateChanged();
          } else {
            this.alertService.error(res.message);
          }
        });
    }
    this.jobGroup = new FormGroup({
      id: new FormControl(0),
      jobtitle: new FormControl('', Validators.required),
      jobid: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      industry: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      jobtype: new FormControl('', Validators.required),
      client: new FormControl('', Validators.required),
      isclientConfidencial: new FormControl(false),
      experience: new FormControl('', Validators.required),
      targetdate: new FormControl('', Validators.required),
      createdBy: new FormControl(''),
      createdDate: new FormControl(''),
      modifiedBy: new FormControl(''),
      modifiedDate: new FormControl(''),
      accountManager: new FormControl(''),
      contactName: new FormControl(''),
      assaignedTo: new FormControl(''),
    });
    this.commonService
      .getMasterData(ApiEndPoints.industries)
      .subscribe((res: any) => {
        this.industries = res;
      });

    // this.commonService.getMasterData(ApiEndPoints.cities).subscribe((res: any) => {
    //   this.cities = res;
    // });

    // this.commonService.getMasterData(ApiEndPoints.states).subscribe((res: any) => {
    //   this.states = res;
    // });

    this.commonService
      .getMasterData(ApiEndPoints.countries)
      .subscribe((res: any) => {
        this.countries = res;
      });

    this.commonService
      .getMasterData(ApiEndPoints.jobtype)
      .subscribe((res: any) => {
        this.jobtypes = res;
      });

    this.commonService
      .getMasterData(ApiEndPoints.clients)
      .subscribe((res: any) => {
        this.clients = res;
      });

    this.commonService
      .getMasterData(ApiEndPoints.experience)
      .subscribe((res: any) => {
        this.experiences = res;
      });

    this.commonService
      .getMasterData(ApiEndPoints.status)
      .subscribe((res: any) => {
        this.statuses = res;
      });

    this.commonService.GetUsersByCountry().subscribe((res: ServiceResponse) => {
      if (res.success) {
        this.usersList = res.data;
        this.users =
          this.id != undefined
            ? this.usersList.filter(
                (x) => x.country == this.jobGroup.controls.country.value
              )
            : this.usersList;
      }
    });
  }

  cancel() {
    this.router.navigate(['jobopenings']);
  }

  onSubmit() {
    if (this.jobGroup.valid) {
      this.user = this.userSession.getLoggedInUser() as User;
      if (
        this.jobGroup.controls.value != undefined &&
        +this.jobGroup.controls.id.value > 0
      ) {
        this.jobGroup.controls.modifiedBy.setValue(this.user.userid);
      } else {
        this.jobGroup.controls.createdBy.setValue(this.user.userid);
      }
      this.jobService
        .addOrUpdateOpening(this.jobGroup.value)
        .subscribe((res: ServiceResponse) => {
          if (res.success) {
            this.alertService.success(res.message);
            this.router.navigate(['jobopenings']);
          } else {
            this.alertService.error(res.message);
          }
        });
    }
  }

  countryChanged(isEdit: boolean = true) {
    this.states = [];
    this.cities = [];
    if (isEdit) {
      this.getNewJobId();
    }
    this.commonService
      .getStatesByCountry(this.jobGroup.controls.country.value)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.states = res.data;
        } else {
          this.alertService.error(res.message);
        }
      });
  }

  stateChanged() {
    this.cities = [];
    this.commonService
      .getCitiesByState(this.jobGroup.controls.state.value)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.cities = res.data;
        } else {
          this.alertService.error(res.message);
        }
      });
  }

  public hasError(controlName: string, errorName: string) {
    return this.jobGroup.controls[controlName].hasError(errorName);
  }

  public getNewJobId() {
    this.jobService
      .getNewJobid(this.jobGroup.controls.country.value)
      .subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.jobGroup.controls.jobid.setValue(res.data);
        } else {
          this.alertService.error(res.message);
        }
      });
  }
}
