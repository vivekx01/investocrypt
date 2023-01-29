import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { AlternativeapiService } from 'src/app/services/alternativeapi.service';
@Component({
  selector: 'app-marketprices',
  templateUrl: './marketprices.component.html',
  styleUrls: ['./marketprices.component.css']
})
export class MarketpricesComponent implements OnInit {
  value: any;
  class: any;
  datarray: any;
  constructor(private service: AlternativeapiService) { }
  ngOnInit(): void {
    this.getdata();
    const datatimelimit = interval(60000) //fetches and updates the data after every 1 minute
    datatimelimit.subscribe(response=>{
      this.getdata();
    })
  }
  getdata(){
    return this.service.getcoindata()
    .subscribe((data:any)=>{
      this.datarray = data.data;
      console.log("Data retrieved")
    })
  }
  valueindicate(value: number): boolean{
    if (value >= 0)
    {
      return true;
    }
    return false;
}

  

}
