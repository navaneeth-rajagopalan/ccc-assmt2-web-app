import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngerDrugCoRelation } from '../models/anger-drug-co-relation'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://localhost:5454/api/anger-drug/co-relation';
  
  constructor(private httpClient: HttpClient) {

  }

  public getAngerDrugCoRelation(): Observable<any>{
    return this.httpClient.get(this.apiURL)
  }
}
