import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngerDrugCoRelation } from '../models/anger-drug-co-relation';
import { ScatterPlotData } from '../models/scatter-plot-data';
import { ScatterPlotLayout } from '../models/scatter-plot-layout';

declare const Plotly

@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.css']
})
export class ScatterPlotComponent implements OnInit{

  @ViewChild('scatterPlot') scatterPlotEl: ElementRef;

  angerDrugCoRelationList: AngerDrugCoRelation[];
  scatterPlotDataItems: ScatterPlotData[];
  scatterPlotLayout: ScatterPlotLayout;

  constructor(private _apiService: ApiService){
    this.scatterPlotDataItems = []
  }

  ngOnInit(){
    this._apiService.getAngerDrugCoRelation()
    .subscribe(data => {
      let xMax = 0, xMin = Number.MAX_SAFE_INTEGER,
          yMax = 0, yMin = Number.MAX_SAFE_INTEGER;
      this.angerDrugCoRelationList = data;
      this.angerDrugCoRelationList.forEach(angerDrugCoRelationData => {
        xMin = angerDrugCoRelationData.angryTweetPercent < xMin ? angerDrugCoRelationData.angryTweetPercent : xMin;
        xMax = angerDrugCoRelationData.angryTweetPercent > xMax ? angerDrugCoRelationData.angryTweetPercent : xMax;
        yMin = angerDrugCoRelationData.angryTweetPercent < yMin ? angerDrugCoRelationData.reportedDrugCases : yMin;
        yMax = angerDrugCoRelationData.angryTweetPercent > yMax ? angerDrugCoRelationData.reportedDrugCases : yMax;
        this.scatterPlotDataItems.push(new ScatterPlotData(angerDrugCoRelationData.angryTweetPercent,
          angerDrugCoRelationData.reportedDrugCases,
          angerDrugCoRelationData.suburbs,
          angerDrugCoRelationData.angryTweetPercent))
      });
      this.scatterPlotLayout = new ScatterPlotLayout("Percentage of Angry Tweets", "Reported Drug Cases per 100 inhabitants", "Anger vs Drug")
      this.scatterPlot(this.scatterPlotDataItems, this.scatterPlotLayout);
    })
  }
  scatterPlot(scatterPlotDataItems, layout){
    const scatterPlotEl = this.scatterPlotEl.nativeElement;
    Plotly.plot('scatterplot', scatterPlotDataItems, layout, {responsive: true, scrollZoom: true})
  }
}
