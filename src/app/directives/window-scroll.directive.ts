import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWindowScroll]'
})
export class WindowScrollDirective {

  constructor(private el: ElementRef) {
    console.log(el)
  }

  ngOnInit() {
    window.addEventListener('mousewheel', this.scrollEvent, true);
  }

  ngOnDestroy() {
    window.removeEventListener('mousewheel', this.scrollEvent, true);
  }

  scrollEvent(event: Event){
    console.log("Test | Scrolling");
  }   
}
