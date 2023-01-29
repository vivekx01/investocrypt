import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './faq/about/about.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { MarketpricesComponent } from './main/marketprices/marketprices.component';
import { ProjectdetailsComponent } from './main/projectdetails/projectdetails.component';
import { SearchprojectComponent } from './main/searchproject/searchproject.component';
import { SentimentComponent } from './main/sentiment/sentiment.component';
import { ProfileComponent } from './usermanage/profile/profile.component';
import { ForgotpassComponent } from './useroauth/forgotpass/forgotpass.component';
import { LoginComponent } from './useroauth/login/login.component';
import { RegisterComponent } from './useroauth/register/register.component';
//Route Protection
import { 
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
 } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToHome = () => redirectLoggedInTo([''])

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"sentiment-analysis",
    component: SentimentComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"market-prices",
    component: MarketpricesComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"search",
    component: SearchprojectComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"searchdetails/:id",
    component: ProjectdetailsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"login",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path:"register",
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path:"forgot-password",
    component: ForgotpassComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToHome}
  },
  {
    path:"profile",
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path:"about",
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
