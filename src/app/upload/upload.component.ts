import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogueComponent } from '../confirm-dialog/confirm-dialogue.component';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  relationList : any = [];
  

  ngOnInit(): void {
    this.myService.relationsApi("4028814f8118b6b1018118c688d60000").subscribe((data: any) => {
      console.log(data.body)
      this.relationList = data.body;
      for(let rel of this.relationList ){
        console.log(rel)
        console.log(rel.relationName)
      }
    })
  }
  uploadFormData: FormGroup;
  name=null;
  relation=null;

  files: File[] = [];
 base64textString:String="";
 message:any;
  constructor(private formBuilder: FormBuilder,private router: Router,private myService: MyServiceService,public dialog: MatDialog) {
    
    this.uploadFormData = this.formBuilder.group({
     
      id : [''],
     
      relationid : [''],
      name : ['',[Validators.required]],
      image: ['',[Validators.required]],
    
  });
  
}
onClickSubmit(){
  const payload = [{
    "userRegister": {
      "id" : "4028814f8118b6b1018118c688d60000"
    },
    "relations":{
      "id" : this.uploadFormData.value.relationid
    },
    "name" : this.uploadFormData.value.name,

    "image" : this.base64textString

  }]

   console.log(this.uploadFormData.value);
   console.log(payload , "this is in payload")
   this.myService.uploadAPI(payload).subscribe((response) => {
     this.message= response
     if(this.message == "Family Members Added Successfully."){
     this.openDialogBox(this.message)
   }
   else{

    this.openDialogBox("Something Went Wrong")
  }   
    });
  }
  openDialogBox(message : any){
    const dialogRef = this.dialog.open(ConfirmDialogueComponent,{
      height :'150px',
      width : '400px',
       data : message
     })
  }
  

  onSelect(event: any) {
    console.log(event);
    this.files = event.addedFiles;
    var file = this.files[0]
    if (this.files) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
  }
  _handleReaderLoaded(readerEvt : any) {
    var binaryString = readerEvt.target.result;
           this.base64textString= btoa(binaryString);
           console.log(btoa(binaryString));
   }
  
  onRemove(event: any) {
    console.log(event);
    this.files = []
  }
}
