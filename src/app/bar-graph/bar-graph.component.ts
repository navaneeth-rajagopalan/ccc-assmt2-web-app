import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AngerDrugCoRelation } from '../models/anger-drug-co-relation';
import { ViewData } from '../models/views-data';
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
  tempData: ViewData[];
  tempData1: ViewData[];
  tempData2: ViewData[];
  tempData3: ViewData[];
  tempData4: ViewData[];
  tweetsBarGraphDataItems: BarGraphData[];
  tweetsBarGraphLayout: BarGraphLayout;
  drugCasesBarGraphDataItems: BarGraphData[];
  drugCasesBarGraphLayout: BarGraphLayout;

  constructor(private _apiService: ApiService){
    this.tweetsBarGraphDataItems = []
    this.drugCasesBarGraphDataItems = []
  }

  getDataForKey(key, dataSet){
    for(let i = 0; i < dataSet.length; i++){
      if(dataSet[i]["key"].trim() === key.trim()){
        return dataSet[i].value
      }
    }
    return -1
  }

  getDataInValue(key, dataSet, index){
    for(let i = 0; i < dataSet.length; i++){
      if(dataSet[i]["key"].trim() === key.trim()){
        if(index === 1)
          return dataSet[i].value.drugPosession
        else if(index === 2)
          return dataSet[i].value.population
      }
    }
    return -1
  }

  ngOnInit(){
		let self = this
    this._apiService.getAPI_URL().subscribe(data =>{
      console.log(data);
      self._apiService.getAngerValues(data.API_URL)
      .subscribe(angryValsData => {
			let angerVals = angryValsData["rows"]
			self.tempData = []
			angerVals.forEach(function(angryVal){
				self.tempData.push({
					municipality: angryVal["key"],
					angryTweetsCount: angryVal["value"],
					totalTweetsCount: -1,
					angryTweetPercent: -1,
					reportedDrugCases: -1,
					totalPopulation: -1,
					drugCasesPer100Pop: -1
				})
			})

			self._apiService.getTotalValue(data.API_URL)
			.subscribe(totalValsData => {
        let totalVals = totalValsData["rows"]
        self.tempData2 = []
				for(let i = 0; i < self.tempData.length; i++){
        let totalTweets = self.getDataForKey(self.tempData[i].municipality, totalVals)
        self.tempData[i].totalTweetsCount = totalTweets
				if(self.tempData[i].totalTweetsCount !== -1){
					self.tempData2.push(self.tempData[i])
				}
				}

				self._apiService.getAurinDrugCasesVals(data.API_URL)
				.subscribe(aurinValsData => {
          let aurinDrugCasesVals = aurinValsData
          self.tempData3 = []
					for(let i = 0; i < self.tempData2.length; i++){
            let reportedDrugCases = self.getDataInValue(self.tempData2[i].municipality, aurinDrugCasesVals, 1)
            self.tempData2[i].reportedDrugCases = reportedDrugCases
						if(self.tempData2[i].reportedDrugCases !== -1){
							self.tempData3.push(self.tempData2[i])
						}
					}

					self._apiService.getAurinPopulationVals(data.API_URL)
					.subscribe(aurinValsData => {
            let aurinPopulationVals = aurinValsData["rows"]
            self.tempData4 = []
						for(let i = 0; i < self.tempData3.length; i++){
              let totalPopulation = self.getDataInValue(self.tempData3[i].municipality, aurinPopulationVals, 2)
              self.tempData3[i].totalPopulation = totalPopulation
							if(self.tempData3[i].totalPopulation !== -1){
								self.tempData4.push(self.tempData3[i])
							}
						}

						self.angerDrugCoRelationList = [];

									self.tempData4.forEach(function(finalData){
										let corData = new AngerDrugCoRelation()
										corData.municipality = finalData.municipality;
										corData.angryTweetPercent = (finalData.angryTweetsCount / finalData.totalTweetsCount) * 100
										corData.reportedDrugCasesPer100 = ((finalData.reportedDrugCases / finalData.totalPopulation) * 100)
										self.angerDrugCoRelationList.push(corData)
									})
									self.angerDrugCoRelationList.forEach(angerDrugCoRelationData => {
										self.tweetsBarGraphDataItems.push(new BarGraphData(angerDrugCoRelationData.municipality, angerDrugCoRelationData.angryTweetPercent));
										self.drugCasesBarGraphDataItems.push(new BarGraphData(angerDrugCoRelationData.municipality, angerDrugCoRelationData.reportedDrugCasesPer100));
									});
									self.tweetsBarGraphLayout = new BarGraphLayout("Percentage of angry tweets")
									self.drugCasesBarGraphLayout = new BarGraphLayout("Drug related offences per 100 inhabitants")
									self.scatterPlot('tweets-bargraph', self.tweetsBarGraphDataItems, self.tweetsBarGraphLayout);
									self.scatterPlot('drug-cases-bargraph', self.drugCasesBarGraphDataItems, self.drugCasesBarGraphLayout);
							})
					})
			})
      })
    })    
  }
  scatterPlot(element, barGraphDataItems, layout){
    Plotly.plot(element, barGraphDataItems, layout, {responsive: true, scrollZoom: true})
  }

}
