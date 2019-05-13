import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngerDrugCoRelation } from '../models/anger-drug-co-relation'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string;
  
  constructor(private httpClient: HttpClient) {
    
  }

  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/data/couchDB_IP_address.json");
  }
  public getAngerDrugCoRelation(apiURL): Observable<any>{
    return this.httpClient.get(apiURL)
  }
}
