import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shoppinglist/shoppinglist.service';
import {Ingredient} from '../../shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  isOpen: boolean = false;
  id: number;

  recipeDetail: Recipe;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
         this.id = +params['id'];
         this.recipeDetail = this.recipeService.getRecipe(this.id);
      }
    )

  }
  toggle() {
    this.isOpen = !this.isOpen;
  }

  onAddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients);
   }

   onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route });
  }

  OnDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
