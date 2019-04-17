import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() menuToBeDisplayed = new EventEmitter<string>();

  constructor() {}

  onSelected(selection: string) {
    this.menuToBeDisplayed.emit(selection);
  }
}
