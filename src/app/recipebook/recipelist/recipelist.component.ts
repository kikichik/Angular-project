import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
 @Input() recipes: Recipe[] = [
    new Recipe('Borsh', 'Russian soup','https://avatanplus.com/files/resources/mid/57a5a4246360a1565f092e37.png'),
    new Recipe('Shawerma', 'SPB best fastfood','http://pngimg.com/uploads/kebab/kebab_PNG24.png')
  ];
  @Output() makeRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipeItem: Recipe) {
     this.makeRecipe.emit(recipeItem);
  }

}
