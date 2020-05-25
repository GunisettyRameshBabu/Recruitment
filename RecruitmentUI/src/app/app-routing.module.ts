import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobopeningsComponent } from './components/jobopenings/jobopenings.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { AuthGuard } from './Guards/auth.guard';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { AddOpeningsComponent } from './components/add-openings/add-openings.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MasterDataComponent } from './components/Admin/master-data/master-data.component';
import { CountryMasterComponent } from './components/Admin/country-master/country-master.component';
import { StateMasterComponent } from './components/Admin/state-master/state-master.component';
import { CityMasterComponent } from './components/Admin/city-master/city-master.component';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path : 'home',
    component : HomeComponent,
    canActivate : [AuthGuard]
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
    path : 'addjob',
    component : AddOpeningsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'editjob/:id',
    component : AddOpeningsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'users',
    component : UsersComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'dashboard',
    component : DashboardComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'master',
    component : MasterDataComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'city',
    component : CityMasterComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'country',
    component : CountryMasterComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'state',
    component : StateMasterComponent,
    canActivate : [AuthGuard]
  },
  {
    path : 'unauth',
    component : UnAuthorizedComponent
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
