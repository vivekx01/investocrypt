import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { MarketpricesComponent } from './marketprices/marketprices.component';
import { SearchprojectComponent } from './searchproject/searchproject.component';
import { RoundoffPipe } from './pipes/roundoff.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    SentimentComponent,
    MarketpricesComponent,
    SearchprojectComponent,
    RoundoffPipe,

  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DashboardComponent,
    SentimentComponent,
    MarketpricesComponent,
    SearchprojectComponent
  ]
})
export class MainModule { }
