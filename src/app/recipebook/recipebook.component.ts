import {Component, Input} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
})
export class RecipebookComponent {
  selectedRecipe: Recipe;
}
