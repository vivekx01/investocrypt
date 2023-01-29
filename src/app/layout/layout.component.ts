import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user;
  authbyGoogle:boolean=false;
  constructor(private fauth:FirebaseauthService){
    this.user= fauth.authInfo
    this.fauth.authInfo.subscribe((res)=>{
      console.log(res);
      if(res?.providerData[0]?.providerId=="google.com"){
        this.authbyGoogle=true;
      }
    })
  }
  ngOnInit(): void {
  }
  logout(){
    this.fauth.userlogout();
  }
}
