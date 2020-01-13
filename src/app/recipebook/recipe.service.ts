import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist/shoppinglist.service';

@Injectable()
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

  constructor(private slService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(newIngredients: Ingredient[]) {
    this.slService.addIngredients(newIngredients);
  }
}
