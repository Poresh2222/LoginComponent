import { NgModule, InjectionToken } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupDialogRouteComponent } from './components/singup/singup-dialog/singup-dialog.component';

const routes: Routes = [
  {path: 'singup', component: SingupDialogRouteComponent}
];

export const HOST_NAME = new InjectionToken<string>('hostName');

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
