import { Component ,OnInit} from '@angular/core';
import { ResultsService } from './results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'results';
  rollno= '';
  flag=false;
  name=""
  constructor(private service:ResultsService) { }

  ngOnInit(): void {
    this.service.getresults().subscribe(data=>this.results=data)
  }
  results=[]
  data(){
    for(let entry of this.results)
    {
      
      if(entry.Rollno==this.rollno )
      {
        this.flag=true
        this.name=entry.name
      }
    }
  
}
}
