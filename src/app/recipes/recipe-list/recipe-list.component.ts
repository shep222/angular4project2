import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
      new Recipe('Pulled Pork', 'The best pulled pork EVER', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),
      new Recipe('Ham Sammich', 'Make me One too', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),
      new Recipe('Steak', 'Medium Rare for me please', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
      this.recipeWasSelected.emit(recipe);
  }

}
