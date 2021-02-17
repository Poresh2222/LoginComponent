import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { Apollo } from 'apollo-angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MIX_DIALOG_CONFIG } from '../../dialog/dialog.config';

export interface LoginDialogData {

}

@Component({
  template: ''
})
export class LoginDialogRouteComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      ...MIX_DIALOG_CONFIG,
      backdropClass: "fullPrimaryBackdropBackground",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([dialogRef.componentInstance.redirectUrl]);
    });
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  public redirectUrl: string = "../"

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    //private apollo: Apollo,
    @Inject(MAT_DIALOG_DATA) public data: LoginDialogData) {

  }

  closeDialog(redirectUrl: string): void {
    this.redirectUrl = redirectUrl;
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
