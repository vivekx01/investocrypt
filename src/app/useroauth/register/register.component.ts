import { Component } from '@angular/core';
import { FirebaseauthService } from './../../services/firebaseauth.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fauth:FirebaseauthService){}
  register(data:NgForm){
    const em= data.form.controls['email'].value;
    const ps=data.form.controls['password'].value;
    const fn = data.form.controls['fname'].value;
    const ln = data.form.controls['lname'].value;
    this.fauth.registerwithep(em,ps,fn,ln);
  }
  register_g(){
    this.fauth.userlogin()
  }


}
