import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Onions', 5),
    new Ingredient('Tomato', 3)
  ];

  constructor() {
  }

  ngOnInit() {

  }

  IngredientWasAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
