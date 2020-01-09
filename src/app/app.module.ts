import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipelistComponent } from './recipebook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipebook/recipelist/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipebook/recipedetail/recipedetail.component';
import { ShoppinglisteditComponent } from './shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { RecipebookComponent} from './recipebook/recipebook.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    ShoppinglisteditComponent,
    RecipebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
