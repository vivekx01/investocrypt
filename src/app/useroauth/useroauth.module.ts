import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
//angular fire modules and environment file
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ]
})
export class UseroauthModule { }
