import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() recipeClicked = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onRecipeItemClicked() {
    this.recipeClicked.emit();
  }

}