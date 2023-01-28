import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private fauth: FirebaseauthService){}
  ngOnInit(): void {
    // this.fauth.authInfo.subscribe((res)=>{
    //  console.log(res?.providerData[0]?.providerId);  
    // })
  }
}
