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

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"sentiment-analysis",
    component: SentimentComponent
  },
  {
    path:"market-prices",
    component: MarketpricesComponent
  },
  {
    path:"search",
    component: SearchprojectComponent
  },
  {
    path:"searchdetails/:id",
    component: ProjectdetailsComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"forgot-password",
    component: ForgotpassComponent
  },
  {
    path:"profile",
    component: ProfileComponent
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
