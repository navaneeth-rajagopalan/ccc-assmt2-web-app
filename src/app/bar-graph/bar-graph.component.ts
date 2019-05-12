import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngerDrugCoRelation } from '../models/anger-drug-co-relation';
import { BarGraphData } from '../models/bar-graph-data';
import { BarGraphLayout } from '../models/bar-graph-layout';

declare const Plotly

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @ViewChild('bargraph') barGraphEl: ElementRef;

  angerDrugCoRelationList: AngerDrugCoRelation[];
  tweetsBarGraphDataItems: BarGraphData[];
  tweetsBarGraphLayout: BarGraphLayout;
  drugCasesBarGraphDataItems: BarGraphData[];
  drugCasesBarGraphLayout: BarGraphLayout;

  constructor(private _apiService: ApiService){
    this.tweetsBarGraphDataItems = []
    this.drugCasesBarGraphDataItems = []
  }

  ngOnInit(){
    this._apiService.getJSON().subscribe(data =>{
      console.log(data);
      this._apiService.getAngerDrugCoRelation('http://' +  data.address + ':3001/api/anger-drug/co-relation')
      .subscribe(data => {
        this.angerDrugCoRelationList = data;
        this.angerDrugCoRelationList.forEach(angerDrugCoRelationData => {
          this.tweetsBarGraphDataItems.push(new BarGraphData(angerDrugCoRelationData.suburbs, angerDrugCoRelationData.angryTweetPercent));
          this.drugCasesBarGraphDataItems.push(new BarGraphData(angerDrugCoRelationData.suburbs, angerDrugCoRelationData.reportedDrugCases));
        });
        this.tweetsBarGraphLayout = new BarGraphLayout("Percentage of Angry Tweets")
        this.drugCasesBarGraphLayout = new BarGraphLayout("Reported Drug Cases per 100 inhabitants")
        this.scatterPlot('tweets-bargraph', this.tweetsBarGraphDataItems, this.tweetsBarGraphLayout);
        this.scatterPlot('drug-cases-bargraph', this.drugCasesBarGraphDataItems, this.drugCasesBarGraphLayout);
      })
    })    
  }
  scatterPlot(element, barGraphDataItems, layout){
    Plotly.plot(element, barGraphDataItems, layout, {responsive: true, scrollZoom: true})
  }

}
