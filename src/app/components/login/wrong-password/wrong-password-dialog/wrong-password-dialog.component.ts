import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Apollo } from 'apollo-angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wrong-password-dialog',
  templateUrl: './wrong-password-dialog.component.html',
  styleUrls: ['./wrong-password-dialog.component.scss']
})
export class WrongPasswordDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WrongPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {msg:string}
    ) {

  }

  public redirectUrl:string = null;

  closeDialog(redirectUrl?:string): void {
    if (redirectUrl)  this.redirectUrl = redirectUrl;

    this.dialogRef.close();
  }

  ngOnInit(): void {
   
  }
}
