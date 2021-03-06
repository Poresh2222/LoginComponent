import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {msg:string, dataRefToConfirm:any}
    ) {}

  public redirectUrl:string = null;

  closeDialog(): void {
    this.dialogRef.close({isconfirmed: false});   //  data { isConfirmed: false }
  }

  ngOnInit(): void {
  }

  confirm(){
    this.dialogRef.close({isConfirmed: true, data:this.dialogData.dataRefToConfirm});   //  data next way
  }

}
