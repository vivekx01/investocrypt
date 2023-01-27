import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user;
  constructor(private fauth:FirebaseauthService){
    this.user= fauth.authInfo
  }
  ngOnInit(): void {
    // this.user=JSON.parse(localStorage.getItem('user') || '{}')
  }
  logout(){
    this.fauth.userlogout();
  }
}
