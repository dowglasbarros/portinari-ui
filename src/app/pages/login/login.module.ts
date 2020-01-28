import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';

import { PoPageLoginModule } from '@portinari/portinari-templates';
import { PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    RouterModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule
  ]
})
export class LoginModule { }
