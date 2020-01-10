import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header = 'Recipe book';
  public isMenuCollapsed = true;
  @Output() setActive = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  setRecipebookActive() {
    this.setActive.emit(true);
  }

  setShoppingListActive() {
    this.setActive.emit(false);
  }

}
