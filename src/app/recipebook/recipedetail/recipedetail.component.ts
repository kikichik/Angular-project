import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  isOpen: boolean = false;

  @Input() recipeDetail: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients);
   }
}
