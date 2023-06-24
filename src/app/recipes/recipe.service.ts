import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

   
  // private recipes: Recipe[] = [
  //       new Recipe('Tasty Schnitzel', 
  //       'A super-tasty Schnitzel - just-awesome',
  //       'https://img.freepik.com/premium-photo/wiener-schnitzel-with-fried-potatoes-black-background_123827-22831.jpg?w=1060',
  //       [
  //         new Ingredient('Meat', 1),
  //         new Ingredient('French Fries', 20),

  //       ] ),
    
  //       new Recipe('Big Fat Burger',
  //        'What else you need to say?', 
  //        'https://www.allrecipes.com/thmb/8Om8KljL3tDJ-Uqz4uvmBBAi9RQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/39748-actually-delicious-turkey-burgers-DDMFS-4x3-5b5996b0ff0b4590b7171592591cca96.jpg',
  //        [
      //     new Ingredient('Buns', 2),
      //     new Ingredient('Meat', 1),
      //    ] ),
      //    new Recipe('Laziz Pizza', 
      //   'Delicious!',
      //   'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mexican-fiesta.559a1961ca021b8fb90367c6918e50f1.1.jpg',
      //   [
      //     new Ingredient('cheese',4),
      //     new Ingredient('paneer', 2),

      //   ] )
      // ];

  private recipes: Recipe[] = [];
      constructor(private slService: ShoppingListService) {

      }
    setRecipes(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
    }

      getRecipes(){
        return this.recipes.slice();
      }
   
      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients:Ingredient[]) {
         this.slService.addIngredients(ingredients);
             
      }
     addRecipe(recipe: Recipe) {
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice());
     }
     updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
       this.recipesChanged.next(this.recipes.slice());
     }
    deleteRecipe(index: number){
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes. slice());
    } 
}