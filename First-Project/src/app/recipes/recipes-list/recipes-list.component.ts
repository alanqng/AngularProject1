import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'https://www.sandiegoprosthodontics.com/files/2018/09/Recipes-Banner.jpg'),
    new Recipe('A 2test recipe', 'This is simple a test', 'https://www.sandiegoprosthodontics.com/files/2018/09/Recipes-Banner.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
