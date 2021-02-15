import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, RouterEvent, NavigationStart } from '@angular/router';
import { DESKTOP_REGULAR, FULL_DIALOG_CONFIG, DialogConfig } from '../../dialog/dialog.config';
import { filter, take, tap, takeUntil } from 'rxjs/operators';

import { BasePageComponent } from '../../base-page/base-page.component';
import { DetectDeviceService } from '../../../services/utils/detect-device.service';

export interface SignUpDialogData{  }


@Component({
  template: ''
})
export class SingupDialogRouteComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private detectDesktopService: DetectDeviceService,
    private route: ActivatedRoute) { }
    
  dialogSize: DialogConfig = FULL_DIALOG_CONFIG;  

  ngOnInit(): void {
    if (this.detectDesktopService.isDesktop()) {
      this.dialogSize = DESKTOP_REGULAR
    }

    this.openDialog();

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SingupDialogComponent, {
      ...this.dialogSize,
      panelClass: 'singup',
      disableClose: true,
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([dialogRef.componentInstance.redirectUrl], { relativeTo: this.route});
    });

  }

}

@Component({
  selector: 'app-singup-dialog',
  templateUrl: './singup-dialog.component.html',
  styleUrls: ['./singup-dialog.component.scss']
})
export class SingupDialogComponent extends BasePageComponent {

  constructor(
    public dialogRef: MatDialogRef<SingupDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: SignUpDialogData ) {
      super();
      router.events.pipe(
        filter((event: RouterEvent) => event instanceof NavigationStart),
        tap(() => this.dialogRef.close()),
        take(1),
        takeUntil(this.unsubscribe)
      ).subscribe();
    }

    public redirectUrl: string = '../'

    closeDialog(redirectUrl: string): void {
      this.redirectUrl = redirectUrl;
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
