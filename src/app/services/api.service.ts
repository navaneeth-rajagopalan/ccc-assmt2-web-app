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

  public getAPI_URL(): Observable<any> {
    return this.httpClient.get("./assets/data/couch_API_URL.json");
  }

  public getAngerValues(apiURL): Observable<any>{
    return this.httpClient.get("/api/anger-drug/angryVals")
  }

  public getTotalValue(apiURL): Observable<any>{
    return this.httpClient.get("/api/anger-drug/totalVals")
  }

  public getAurinDrugCasesVals(apiURL): Observable<any>{
    return this.httpClient.get("/api/anger-drug/aurinDrugCasesVals")
  }

  public getAurinPopulationVals(apiURL): Observable<any>{
    return this.httpClient.get("/api/anger-drug/aurinPopulationVals")
  }
}
