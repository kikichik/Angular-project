import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Recipe} from '../recipebook/recipe.model';
import {RecipeService} from '../recipebook/recipe.service';
import {map} from 'rxjs/operators';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {}
  recipePath = 'https://recipe-book-9939b.firebaseio.com/';

  addRecipe() {
    return this.http.put(
      this.recipePath + 'recipes.json',
      this.recipeService.getRecipes()
    );
  }

  getRecipe() {
    return this.http.get(this.recipePath + 'recipes.json').pipe(
      map(
        (recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
    );
  }
}
