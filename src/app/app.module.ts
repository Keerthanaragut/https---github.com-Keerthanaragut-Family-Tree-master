import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { UserHomeComponent } from './userHome/userHome.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ConfirmDialogueComponent } from './confirm-dialog/confirm-dialogue.component';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UploadComponent,
    HomeComponent,
    UserHomeComponent,
    ViewComponent,
    ConfirmDialogueComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    NgxDropzoneModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MDBBootstrapModule.forRoot()
   
  ],
  entryComponents: [ConfirmDialogueComponent],
  providers: [],
  bootstrap: [AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class AppModule { }
