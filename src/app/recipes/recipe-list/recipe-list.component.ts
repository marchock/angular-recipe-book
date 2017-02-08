import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [];

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipesService.getRecipes();
  }

  onSelected(recipe: Recipe) {

  }

}
