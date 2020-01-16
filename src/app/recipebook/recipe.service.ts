import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shoppinglist/shoppinglist.service';
import {Subject} from 'rxjs';

@Injectable()
export  class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(newIngredients: Ingredient[]) {
    this.slService.addIngredients(newIngredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
