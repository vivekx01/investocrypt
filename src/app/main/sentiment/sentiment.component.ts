import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AlternativeapiService } from 'src/app/services/alternativeapi.service';
Chart.register(...registerables);

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {
  fngarray:any = []
  constructor(private apiservice: AlternativeapiService) { }
  ngOnInit(): void {
    this.getfng7();
    // setTimeout(()=>{
    //   this.constructgraph();
    // },500)
  }
  async getfng7() {
    let prom = new Promise ((resolve,reject)=>{
        this.apiservice.getfng7d().subscribe((res: any) => {
        const f = res.data
        f.forEach((element: any) => {
          this.fngarray.push(element.value)
        });
      })
      resolve("Done!")
    })
    await prom;
    setTimeout(()=>{
      this.constructgraph(this.fngarray);
    },700)
    
    // return new Promise<void>((resolve,reject)=>{
    //   this.apiservice.getfng7d().subscribe((res: any) => {
    //     const f = res.data
    //     f.forEach((element: any) => {
    //       this.fngarray.push(element.value)
    //     });
    //   })
    //   resolve();
    // })
    // old logic
    // this.apiservice.getfng7d().subscribe((res: any) => {
    //   const f = res.data
    //   f.forEach((element: any) => {
    //     this.fngarray.push(element.value)
    //   });
    // })
    
  }
  constructgraph(arr:any=[]){
    var myChart = new Chart("myChart", {
      type: "line",
      data: {
        labels: [
          "Day 1",
          "Day 2",
          "Day 3",
          "Day 4",
          "Day 5",
          "Day 6",
          "Today",
        ],
        datasets: [
          {
            data: arr.reverse(),
            backgroundColor: "transparent",
            borderColor: "#0cac9c",
            borderWidth: 4,
            pointBackgroundColor: "#0cac9c",
          },
        ],
      },
      options: {
        scales: {
          y:{
            beginAtZero: false,
          }
        },
        plugins:{
          legend: {
            display: false,
          }
        }
      },
      
    });
  }

}

