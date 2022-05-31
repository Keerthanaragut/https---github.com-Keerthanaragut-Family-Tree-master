import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  registerFormData: FormGroup;
  emailId=null;
  password=null;

  constructor(private formBuilder: FormBuilder,private router: Router,private myService: MyServiceService) {
    
    this.registerFormData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      
  });
  
}
onClickSubmit(){

  //console.log(this.registerFormData.value);
   this.myService.addRegisterAPI(this.registerFormData.value).subscribe((response) => {
    swal.fire({
      icon: 'success',
      title: 'User Registered Successfully.',
      showConfirmButton: false,
      timer: 1500
    })
     console.log(" === addData  ===");
     console.log(response);
   }, error => {
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      timer: 1500
    })
    });
  

  this.registerFormData.reset();
  }
 }



