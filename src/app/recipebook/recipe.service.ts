import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export  class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Borsh',
      'Russian soup',
      'https://avatanplus.com/files/resources/mid/57a5a4246360a1565f092e37.png',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Svekla', 1)
      ]),
    new Recipe(
      'Shawerma',
      'SPB best fastfood',
      'http://pngimg.com/uploads/kebab/kebab_PNG24.png',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Lavash', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
