import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialog/confirm-dialogue.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormData: FormGroup;
  emailId = null;
  password = null;
  retUrl: any = "auth";

  message: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private myService: MyServiceService, private activatedRoute: ActivatedRoute, public dialog: MatDialog) {
    this.loginFormData = this.formBuilder.group({

      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }
  onClickSubmit() {
    //console.log(this.registerFormData.value);
    this.myService.loginapi(this.loginFormData.value).subscribe((response) => {
      this.message = response
      if (this.message == "Login Successful.") {
        this.openDialogBox(this.message)
        this.router.navigate(['/userHome']);
      } else {
        this.openDialogBox("Invalid Login Credentials")
      }
    });


    this.loginFormData.reset();
  }
  openDialogBox(message: any) {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      height: '150px',
      width: '400px',
      data: message
    })
  }
}





