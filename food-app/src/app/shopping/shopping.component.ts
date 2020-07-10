import { Component, OnInit } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';

// ShoppingListEditComponent,
// ShoppingListComponent,
// IngredientComponent,

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
