import {Component, OnInit} from '@angular/core';
import {RecipeService} from './recipe.service';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  providers: [
    RecipeService
  ]
})
export class RecipebookComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
  }
}
