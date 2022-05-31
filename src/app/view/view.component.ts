import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import swal from 'sweetalert2';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  treeData: any = [];
  l1 = ['15', '16', '17', '18'];
  l2 = ['11', '12' ];
  l3 = ['13' , '14' , '21' , '22' ,'23' ,'24'];
  l4 = ['19' , '20'];
  level1: any = [];
  level2: any = [];
  level3: any = [];
  level4: any = [];

  constructor(private myService: MyServiceService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer) {

  }


  ngOnInit() {
    this.myService.getmembersAPI('4028814f8118b6b1018118c688d60000').subscribe((data) => {
      console.log(data)
      this.treeData = data.body
      for (let data of this.treeData) {

        if (this.l1.includes(data.relations.id)) {
          if (data.image != "") {
            data.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.image)
          }
          if(this.level1.length > 0){
          for(let element of this.level1) {
            if(element.relations.id!= data.relations.id){
              this.level1.push(data)
            }
          };
        }else{this.level1.push(data) }
        
        }
        if (this.l2.includes(data.relations.id)) {
          if (data.image != "") {
            data.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.image)
          }
          this.level2.push(data)
        //   if(this.level2.length > 0){
        //   for(let element of this.level2) {
        //     if(element.relations.id!= data.relations.id){
        //       this.level2.push(data)
        //     }
        //   };
        // }else{this.level2.push(data) }
        }
        if (this.l3.includes(data.relations.id)) {
          if (data.image != "") {
            data.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.image)
          }
         this.level3.push(data) 
        }
        if (this.l4.includes(data.relations.id)) {
          if (data.image != "") {
            data.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data.image)
          }
        this.level4.push(data) 
        }
      }
      console.log(this.level1)
      console.log(this.level2)
      console.log(this.level3)
      console.log(this.level4)

    })
  }

}






