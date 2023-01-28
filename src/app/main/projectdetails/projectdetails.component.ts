import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlternativeapiService } from 'src/app/services/alternativeapi.service';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
  id:any=''
  projectdata:any;
  constructor(private route:ActivatedRoute, private apiservice:AlternativeapiService){}
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.getdetails();
  }
  getdetails(){
    this.apiservice.getcoinbyid(this.id).subscribe((res:any)=>{
      this.projectdata = res.data[this.id];
      console.log(this.projectdata.name);
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
