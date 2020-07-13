import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  {
    path: 'recipe',
    component: RecipeComponent,
  },

  {
    path: 'shopping',
    component: ShoppingComponent,
  },

  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ShoppingComponent,
  RecipeComponent,
  RecipeListComponent,
  RecipeDetailsComponent,
  ShoppingListEditComponent,
  ShoppingListComponent,
];
