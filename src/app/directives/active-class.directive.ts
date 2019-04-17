import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appActiveClass]'
})
export class ActiveClassDirective {
  @HostBinding('class.active') isActive = false;

  constructor(private _elementRef: ElementRef) { }

  @HostListener('click', ['$event.target'])
  makeActive(liTag) {
    this.isActive = !this.isActive;
  }

}
