import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Dummy',
            'Dummy',
            'http://orig15.deviantart.net/a235/f/2010/181/c/e/test_crash_dummy_by_thelittlereaper.jpg',
            [new Ingredient('French fries', 2), new Ingredient('Pork Meat', 4)]
        ),
        new Recipe(
            'Burger',
            'Burger beef',
            'http://ichef.bbci.co.uk/news/660/cpsprodpb/1325A/production/_88762487_junk_food.jpg',
            [])
    ];

  constructor() { }

  getRecipes() {
      return this.recipes;
  }

  getRecipe(id: number) {
      return this.recipes[id];
  }


  deleteRecipe(recipe: Recipe) {
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
