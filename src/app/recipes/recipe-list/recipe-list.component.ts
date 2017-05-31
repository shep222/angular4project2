import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Pulled Pork', 'The best pulled pork EVER', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
