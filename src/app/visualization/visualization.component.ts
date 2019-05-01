import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/data/data.model'

@Component({
	selector: 'app-visualization',
	templateUrl: './visualization.component.html',
	styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent{
	data: Observable<DataModel>;

	constructor(private animateScrollService: NgAnimateScrollService, private http: HttpClient){
		this.data = this.http.get<DataModel>('../../assets/data/data.json')
	}
	scrollToHome(duration?:number){
		console.log("Clicked to scroll - Home")
		this.animateScrollService.scrollToElement('home', duration)
	}
}