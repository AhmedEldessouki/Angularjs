import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient(
      'Apples',
      5,
      'https://cdn.pixabay.com/photo/2016/09/20/07/25/food-1681977_640.png'
    ),
    new Ingredient(
      'Oranges',
      15,
      'https://media.istockphoto.com/photos/orange-fruit-isolated-on-white-background-picture-id489425692?k=6&m=489425692&s=612x612&w=0&h=W9SEn9QvJiy_OJiKH4uD0Dsad8T9zZluZ7xgrux5HJY='
    ),
    new Ingredient(
      'White Flour',
      10,
      'https://images.wisegeek.com/flour-in-white-dish-on-table.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onIngredientAdd(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}
