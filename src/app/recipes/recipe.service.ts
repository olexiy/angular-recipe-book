import { EventEmitter, Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService ) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Snitzel',
      'A super tasty Schitzel - just awesom',
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/Turkey_Schnitzel_with_Spatzle_and_vegetables.JPG',
      [
        new Ingridient('Schweinefleisch', 1),
        new Ingridient('French Fries', 20),
      ]
    ),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/9/98/Meat_Bar_Burger_440_Burger_With_French_Fries.jpg',
      [
        new Ingridient('Buns', 2),
        new Ingridient('Rindfleisch', 1),
      ]
    ),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngridientsToShoppingList(ingridients: Ingridient[]){
    this.shoppingListService.addIngridients(ingridients);
  }

 
}
