import { Component } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Group 55';
  constructor(private animateScrollService: NgAnimateScrollService){

  }
}
