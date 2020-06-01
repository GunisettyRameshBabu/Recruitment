import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ToastrModule } from 'ngx-toastr';
import { JobopeningsComponent } from './components/jobopenings/jobopenings.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { UsersComponent } from './components/Admin/users/users.component';
import {
  GridModule,
  DetailRowService,
  ToolbarService,
  ExcelExportService,
  EditService,
} from '@syncfusion/ej2-angular-grids';

import {
  PageService,
  SortService,
  FilterService,
  GroupService,
} from '@syncfusion/ej2-angular-grids';
import { AddOpeningsComponent } from './components/add-openings/add-openings.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UsereditComponent } from './components/Admin/users/useredit/useredit.component';
import { JobcandidatesComponent } from './components/jobcandidates/jobcandidates.component';
import { AddcandidateComponent } from './components/jobcandidates/addcandidate/addcandidate.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MasterDataComponent } from './components/Admin/master-data/master-data.component';
import { MenuModule } from '@syncfusion/ej2-angular-navigations';
import { RecruitCareComponent } from './components/recruit-care/recruit-care.component';
import { RecruitCareEditComponent } from './components/recruit-care/recruit-care-edit/recruit-care-edit.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditOrAddMasterDataComponent } from './components/Admin/master-data/edit-or-add-master-data/edit-or-add-master-data.component';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MatButtonModule } from '@angular/material/button';
import { EqualValidatorDirective } from './Directives/equal-validator.directive';
import { CountryMasterComponent } from './components/Admin/country-master/country-master.component';
import { StateMasterComponent } from './components/Admin/state-master/state-master.component';
import { CityMasterComponent } from './components/Admin/city-master/city-master.component';
import { AddOrEditCountryComponent } from './components/Admin/country-master/add-or-edit-country/add-or-edit-country.component';
import { AddOrEditStateComponent } from './components/Admin/state-master/add-or-edit-state/add-or-edit-state.component';
import { AddOrEditCityComponent } from './components/Admin/city-master/add-or-edit-city/add-or-edit-city.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ViewcandidateComponent } from './components/jobcandidates/viewcandidate/viewcandidate.component';
import { RecruitCareViewComponent } from './components/recruit-care/recruit-care-view/recruit-care-view.component';
import { ClientsComponent } from './components/Admin/clients/clients.component';
import { ClientEditComponent } from './components/Admin/clients/client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    JobopeningsComponent,
    JobdetailsComponent,
    ErrorComponent,
    PageNotFoundComponent,
    UnAuthorizedComponent,
    UsersComponent,
    AddOpeningsComponent,
    UsereditComponent,
    JobcandidatesComponent,
    AddcandidateComponent,
    DashboardComponent,
    MasterDataComponent,
    RecruitCareComponent,
    RecruitCareEditComponent,
    EditOrAddMasterDataComponent,
    ConfirmationDialogComponent,
    ResetPasswordComponent,
    EqualValidatorDirective,
    CountryMasterComponent,
    StateMasterComponent,
    CityMasterComponent,
    AddOrEditCountryComponent,
    AddOrEditStateComponent,
    AddOrEditCityComponent,
    SpinnerComponent,
    ViewcandidateComponent,
    RecruitCareViewComponent,
    ClientsComponent,
    ClientEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added
    AccordionModule.forRoot(),
    GridModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    UploaderModule,
    MenuModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    ModalModule.forRoot(),
    DialogModule,
    DashboardLayoutModule,
    MatButtonModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    PageService,
    SortService,
    FilterService,
    GroupService,
    DetailRowService,
    ExcelExportService,
    ToolbarService,
    EditService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditOrAddMasterDataComponent,
    RecruitCareEditComponent,
    UsereditComponent,
    JobcandidatesComponent,
    ResetPasswordComponent,
    AddOrEditCityComponent,
    AddOrEditCountryComponent,
    AddOrEditStateComponent,
    SpinnerComponent,
    RecruitCareViewComponent,
    ViewcandidateComponent
  ],
})
export class AppModule {}
