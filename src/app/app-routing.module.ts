import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipebookComponent } from './recipebook/recipebook.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PleaseSelectComponent } from './please-select/please-select.component';
import { RecipeEditComponent } from './recipebook/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'recipes', component: RecipebookComponent, children: [
    { path: '', component: PleaseSelectComponent, pathMatch: 'full'},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipedetailComponent},
    { path: ':id/edit', component: RecipeEditComponent }
  ]},
  { path: 'shopping_list', component: ShoppinglistComponent, children: [
    { path: 'edit', component: ShoppinglisteditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
