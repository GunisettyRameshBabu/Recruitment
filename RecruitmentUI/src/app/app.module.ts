import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/Layout/header/header.component';
import { FooterComponent } from './components/Layout/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader'; 
import { ToastrModule } from 'ngx-toastr';
import { JobopeningsComponent } from './components/jobopenings/jobopenings.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { JobapplyComponent } from './components/jobapply/jobapply.component';
import { UnAuthorizedComponent } from './components/un-authorized/un-authorized.component';
import { UsersComponent } from './components/users/users.component';
import { GridModule, DetailRowService,ToolbarService, ExcelExportService, EditService } from '@syncfusion/ej2-angular-grids';

import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AddOpeningsComponent } from './components/add-openings/add-openings.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UsereditComponent } from './components/users/useredit/useredit.component';
import { JobcandidatesComponent } from './components/jobcandidates/jobcandidates.component';
import { AddcandidateComponent } from './components/jobcandidates/addcandidate/addcandidate.component';

import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
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
    JobapplyComponent,
    UnAuthorizedComponent,
    UsersComponent,
    AddOpeningsComponent,
    UsereditComponent,
    JobcandidatesComponent,
    AddcandidateComponent
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
    UploaderModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    PageService,
        SortService,
        FilterService,
        GroupService,
        DetailRowService,
        ExcelExportService, ToolbarService,
        EditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
