import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.css']
})
export class ConfirmDialogueComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ConfirmDialogueComponent> , @Inject(MAT_DIALOG_DATA) public data : any) {
    console.log(data)
   }

  ngOnInit(): void {
  }

}
