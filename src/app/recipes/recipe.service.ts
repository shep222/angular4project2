import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Pulled Pork', 'The best pulled pork EVER', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg',[
            new Ingredient('Boston Butt', 1),
            new Ingredient('Dry Rub', 1),
            new Ingredient('Orange Juice', 12)
        ]),
        new Recipe('Ham Sammich', 'Make me One too', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg',[
            new Ingredient('Ham', 1),
            new Ingredient('Cheese', 1),
            new Ingredient('Bread', 2)
        ]),
        new Recipe('Steak', 'Medium Rare for me please', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg',[
            new Ingredient('16 oz Ribeye', 1),
            new Ingredient('olive oil', 1),
            new Ingredient('Tonys Seasoning', 1)
        ]),

    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}
