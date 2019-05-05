import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent{
	constructor(private animateScrollService: NgAnimateScrollService, private router: Router){

	}
	scrollToVisuals(duration?:number){
		// console.log("Clicked to scroll - Visual")
		// this.animateScrollService.scrollToElement('data-visual', duration)
		this.router.navigate(['./visualization'])
	}
}