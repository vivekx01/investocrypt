import { Component } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  constructor(private fauth: FirebaseauthService){}
  uemail:string='';
  forgotpass(){
    this.fauth.forgotpassword(this.uemail)

  }

}
