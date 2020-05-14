import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ApiEndPoints } from 'src/app/constants/api-end-points';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Opening } from './opening';
import { JobService } from 'src/app/services/job.service';
import { ServiceResponse } from 'src/app/models/service-response';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-openings',
  templateUrl: './add-openings.component.html',
  styleUrls: ['./add-openings.component.css']
})
export class AddOpeningsComponent implements OnInit {

  industries = [];
  countries = [];
  cities: any = [];
  states: any = [];
  clients = [];
  jobtypes = [];
  experiences = [];
  jobGroup: FormGroup;
  
  
  constructor(private commonService: CommonService, private jobService: JobService,
     private alertService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.jobGroup = new FormGroup({
      jobtitle: new FormControl('', Validators.required),
      jobcode: new FormControl('', Validators.required),
      industry: new FormControl('' , Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      jobtype: new FormControl('', Validators.required),
      client: new FormControl('', Validators.required),
      clientVisible: new FormControl(),
      experience: new FormControl('', Validators.required),
      targetdate: new FormControl('', Validators.required)
    });
    this.commonService.getMasterData(ApiEndPoints.industries).subscribe((res: any) => {
      this.industries = res;
    });

    // this.commonService.getMasterData(ApiEndPoints.cities).subscribe((res: any) => {
    //   this.cities = res;
    // });

    // this.commonService.getMasterData(ApiEndPoints.states).subscribe((res: any) => {
    //   this.states = res;
    // });

    this.commonService.getMasterData(ApiEndPoints.countries).subscribe((res: any) => {
      this.countries = res;
    });

    this.commonService.getMasterData(ApiEndPoints.jobtype).subscribe((res: any) => {
      this.jobtypes = res;
    });

    this.commonService.getMasterData(ApiEndPoints.clients).subscribe((res: any) => {
      this.clients = res;
    });

    this.commonService.getMasterData(ApiEndPoints.experience).subscribe((res: any) => {
      this.experiences = res;
    });
  }

  onSubmit() {
    if (this.jobGroup.valid) {
      let opening = new Opening();
      opening.city = this.jobGroup.controls.city.value;
      opening.client = this.jobGroup.controls.client.value;
      opening.clientVisible = this.jobGroup.controls.clientVisible.value == undefined ? false : this.jobGroup.controls.clientVisible.value;
      opening.country = this.jobGroup.controls.country.value;
      opening.description = this.jobGroup.controls.description.value;
      opening.experience = this.jobGroup.controls.experience.value;
      opening.industry = this.jobGroup.controls.industry.value;
      opening.jobcode = this.jobGroup.controls.jobcode.value;
      opening.jobtitle = this.jobGroup.controls.jobtitle.value;
      opening.jobtype = this.jobGroup.controls.jobtype.value;
      opening.state = this.jobGroup.controls.state.value;
      opening.zip = this.jobGroup.controls.zip.value;
      opening.targetdate = this.jobGroup.controls.targetdate.value;
      console.log(opening);
      this.jobService.addOpening(opening).subscribe((res: ServiceResponse) => {
        if (res.success) {
          this.alertService.success('Job Opening added successfully');
          this.router.navigate(['jobopenings']);
        } else {
          this.alertService.error(res.message);
        }
      });
    }
  }

  countryChanged() {
    this.states = [];
    this.cities = []; 
this.getNewJobId();
    this.commonService.getStatesByCountry(this.jobGroup.controls.country.value).subscribe((res: ServiceResponse) => {
      if (res.success) {
        this.states = res.data;
      } else {
        this.alertService.error(res.message);
      }
    });
  }

  stateChanged() {
    this.cities = [];
    this.commonService.getCitiesByState(this.jobGroup.controls.state.value).subscribe((res: ServiceResponse) => {
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
    this.jobService.getNewJobid(this.jobGroup.controls.country.value).subscribe((res: ServiceResponse) => {
      if (res.success) {
        this.jobGroup.controls.jobcode.setValue(res.data);
      } else {
        this.alertService.error(res.message);
      }
    });
  }
}
