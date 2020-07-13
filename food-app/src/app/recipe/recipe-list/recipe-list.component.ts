import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Recipe Name',
      'made with love',
      'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/28/34/5/pic3nrdqS.jpg'
    ),
    new Recipe(
      'Recipe Name',
      'made with love',
      'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/28/34/5/pic3nrdqS.jpg'
    ),
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
