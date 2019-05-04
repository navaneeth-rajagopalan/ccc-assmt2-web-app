import { Directive } from '@angular/core';

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {

  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    console.log("Test | Scrolling");
    const number = event.srcElement.scrollTop;
  }   
}
