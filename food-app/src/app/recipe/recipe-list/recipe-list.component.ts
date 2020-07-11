import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe Name',
      'made with love',
      'http://img.sndimg.com/food/image/upload/w_614,h_461/v1/img/recipes/28/34/5/pic3nrdqS.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
