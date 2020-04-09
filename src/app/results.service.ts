import { Injectable } from '@angular/core';
import { IResults } from './results';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  private url1:string="/assets/json files/Rollno.json"

  constructor(private http:HttpClient) { 
    
  }
  getresults():Observable<IResults[]>
  {
    return this.http.get<IResults[]>(this. url1);
        
 } 
}
