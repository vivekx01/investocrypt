import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { MarketpricesComponent } from './marketprices/marketprices.component';
import { SearchprojectComponent } from './searchproject/searchproject.component';
import { RoundoffPipe } from './pipes/roundoff.pipe';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent,
    SentimentComponent,
    MarketpricesComponent,
    SearchprojectComponent,
    RoundoffPipe,
    CustomFilterPipe,
    ProjectdetailsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    SentimentComponent,
    MarketpricesComponent,
    SearchprojectComponent,
    ProjectdetailsComponent
  ]
})
export class MainModule { }
