import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseproject';
  isRecipeBookActive = true;
  isShoppingListActive = false;

onNavigate(active: boolean)   {
  if (active) {
    this.isRecipeBookActive = true;
    this.isShoppingListActive = false;
  } else {
    this.isRecipeBookActive = false;
    this.isShoppingListActive = true;
  }
}

}
