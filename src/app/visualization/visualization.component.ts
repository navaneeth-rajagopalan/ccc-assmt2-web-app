import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataModel } from 'src/app/data/data.model'
import { Routes, RouterModule } from '@angular/router';

@Component({
	selector: 'app-visualization',
	templateUrl: './visualization.component.html',
	styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent{
	data: Observable<DataModel>;
	visual: string; 

	constructor(private animateScrollService: NgAnimateScrollService, private http: HttpClient){
		this.data = this.http.get<DataModel>('../../assets/data/data.json');
		this.visual = 'visual1'
	}
	scrollToHome(duration?:number){
		console.log("Clicked to scroll - Home")
		this.animateScrollService.scrollToElement('home', duration)
	}
	changeVisual(){
		
	}
}