import { Component,OnInit } from '@angular/core';
import { FirebaseauthService } from '../../services/firebaseauth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user;
  lslg:any;
  pfc:any;
  authbyGoogle:boolean=false;
  constructor(private fauth:FirebaseauthService){
    this.user= fauth.authInfo
    this.fauth.authInfo.subscribe((res)=>{
      console.log(res);
      this.pfc=res?.metadata.creationTime;
      this.lslg=res?.metadata.lastSignInTime;
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
