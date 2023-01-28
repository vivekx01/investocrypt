import { Component,OnInit } from '@angular/core';
import { AlternativeapiService } from 'src/app/services/alternativeapi.service';

@Component({
  selector: 'app-searchproject',
  templateUrl: './searchproject.component.html',
  styleUrls: ['./searchproject.component.css']
})
export class SearchprojectComponent implements OnInit{
  datarray:any =[]
  term: string = '';
  constructor(private apiservice:AlternativeapiService){}
  ngOnInit(): void {
    this.apiservice.getlistings().subscribe((res:any)=>{
      this.datarray = res.data;
      console.log("Listing Data Retrieved");
      
    })
}
}
