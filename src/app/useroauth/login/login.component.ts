import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user;
  email:string ='';
  password:string ='';

  ngOnInit(){}
  constructor(private fauth:FirebaseauthService){
    this.user = fauth.authInfo
}
  login(){
    this.fauth.userlogin()
    this.user.subscribe(
      (data:any)=>{
        if (data!==null){
          JSON.stringify(localStorage.setItem('user',JSON.stringify(data)))
        }
        
      }
    )
  }
  
  loginwithep(data:NgForm){
    const em= data.form.controls['email'].value;
    const ps=data.form.controls['password'].value;
    this.fauth.userloginwithep(em,ps);
  }

  

}
