import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  public authInfo: Observable<firebase.User | null>;
  public authType:any;
  constructor(private http: HttpClient, private auth: AngularFireAuth, private router: Router) {
    this.authInfo = this.auth.authState;
  }
  userlogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
      this.router.navigate([''])
    })
  }
  userloginwithep(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then((res) => {
      if (res.user?.emailVerified == true) {
        localStorage.setItem('token', 'true');
        this.router.navigate(['']);
      } else {
        alert("Account Created! Please make sure to verify your email before signing in !");
        this.router.navigate(['/login']);
      }

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);

    })
  }
  registerwithep(email: string, password: string, fname: string, lname: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then((success) => {
      success.user?.updateProfile({
        displayName: fname + " " + lname,
      })
      this.sendemailforverify(success.user)
      alert("registration successful check mail");
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);

    })

  }
  userlogout() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('true');
      alert("Logged out successfully");
      this.router.navigate(['']);
    }, err => {
      alert(err.message)
      this.router.navigate(['']);
    })

  }
  forgotpassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(() => {
      alert("Reset link sent to your email")
      this.router.navigate(['']);
    }, err => {
      alert(err.message);
    })
  }

  sendemailforverify(user: any) {
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/verify-email']);
    }, (err: any) => {
      alert(err.message);
    })
  }
}
