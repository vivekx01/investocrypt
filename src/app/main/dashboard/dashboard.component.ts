import { Component, OnInit } from '@angular/core';
import { AlternativeapiService } from 'src/app/services/alternativeapi.service';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private fauth: FirebaseauthService, private service:AlternativeapiService){}
  datarray:any=[];
  change24:any=[];
  gainers: any=[];
  losers:any=[];
  ngOnInit(): void {
    this.getdata(); 
  }
  getdata(){
    return this.service.getcoindata()
    .subscribe((data:any)=>{
      this.datarray = data.data;
      console.log("Data retrieved")
      for (const item of this.datarray) {
        // console.log(item.quotes.USD.percent_change_24h);
        if(item.quotes.USD.percent_change_24h!=null){
          this.change24.push(
            {
              id:item.id,
              name: item.name,
              symbol: item.symbol,
              price: item.quotes.USD.price,
              change:item.quotes.USD.percent_change_24h
            }
            )
        }
      }
      const arrtemp = this.sortgainers(this.change24)
      this.gainers=arrtemp.slice(0,5)
      this.losers=arrtemp.slice(arrtemp.length-5,arrtemp.length).reverse();
      console.log("The final gainers list is: ",this.gainers);
      console.log("The final losers list is: ",this.losers);

      
      // this.getfinalgainers();         
    })
  }
  valueindicate(value: number): boolean{
    if (value >= 0)
    {
      return true;
    }
    return false;
  }
  sortgainers(arr:any=[]){
    let arrlength = arr.length;
    for(let i=0;i<arrlength-1;i++){
      for(let j=0;j<arrlength-1;j++){
        if(arr[j].change<arr[j+1].change){
          let temp1= arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=temp1
        }
      }
    }
    return arr;
  }
  // getfinalgainers(){
  //   const arr = this.sortgainers(this.change24);
  //   for(let i=0;i<5;i++){
  //     this.gainers.push(arr[i])
  //   }
  //   console.log(this.gainers);
  // }
}
