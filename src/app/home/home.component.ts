import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent{
	constructor(private animateScrollService: NgAnimateScrollService){

	}
	scrollToVisuals(duration?:number){
		console.log("Clicked to scroll - Visual")
		this.animateScrollService.scrollToElement('data-visual', duration)
	}
}