import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../recipebook/recipe.service';
import {ConfigService} from '../shared/config.service';
import {Recipe} from '../recipebook/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private recipes: Recipe[] = [];
  isOpen: boolean = false;
  header = 'Recipe book';
  public isMenuCollapsed = true;
  @Output() setActive = new EventEmitter<boolean>();

  constructor(private recipeService: RecipeService,
              private config: ConfigService) {
  }

  ngOnInit() {
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

  onSave() {
    this.config.addRecipe()
      .subscribe(
        (response) => console.log(response)
      );
  }

  onFetch() {
    this.config.getRecipe()
      .subscribe(
        (fetchedRecipes: Recipe[]) => {
          this.recipeService.setRecipes(fetchedRecipes);
        }
      );
  }

}
