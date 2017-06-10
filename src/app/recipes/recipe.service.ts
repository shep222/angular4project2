import { Recipe } from './recipe.model'
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Pulled Pork', 'The best pulled pork EVER', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),
        new Recipe('Ham Sammich', 'Make me One too', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),
        new Recipe('Steak', 'Medium Rare for me please', 'http://laurengreutman.com/wp-content/uploads/2015/06/Crockpot-Pulled-Pork-FB.jpg'),

    ];

    getRecipes(){
        return this.recipes.slice();
    }
}
