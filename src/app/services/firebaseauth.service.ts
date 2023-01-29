import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  public authInfo: Observable<firebase.User | null>;
  public authType:any;
  constructor(private http: HttpClient, private auth: AngularFireAuth, private router: Router,private toastr:ToastrService) {
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
        // alert("Account Created! Please make sure to verify your email before signing in !");
        this.auth.signOut();
        this.toastr.success('Please make sure to verify your email before signing in!');
        this.router.navigate(['/login']);
      }

    }, err => {
      // alert(err.message);
      this.toastr.error('Invalid Credentials')
      this.router.navigate(['/login']);
    })
  }
  registerwithep(email: string, password: string, fname: string, lname: string) {
    this.auth.createUserWithEmailAndPassword(email, password).then((success) => {
      success.user?.updateProfile({
        displayName: fname + " " + lname,
      })
      this.sendemailforverify(success.user)
      this.auth.signOut();
      this.router.navigate(['/login']);
    }, err => {
      this.toastr.error('Oops! Something is not right!')
      this.router.navigate(['/register']);
    })

  }
  userlogout() {
    this.auth.signOut().then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('true');
      this.toastr.success('Logout Successful')
      this.router.navigate(['/login']);
    }, err => {
      this.toastr.error('Something went wrong!')
      this.router.navigate(['']);
    })

  }
  forgotpassword(email: string) {
    this.auth.sendPasswordResetEmail(email).then(() => {
      // alert("Reset link sent to your email")
      this.toastr.info('Recovery Link has been sent to your email')
      this.router.navigate(['/login']);
    }, err => {
      this.toastr.error('Something went wrong!')
      // alert(err.message);
    })
  }

  sendemailforverify(user: any) {
    user.sendEmailVerification().then((res: any) => {
      this.toastr.success('Account Created! Please make sure to verify your email before signing in!')
    }, (err: any) => {
      this.toastr.error('Something went wrong!')
    })
  }
}
