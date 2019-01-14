import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a test', 'https://www.sandiegoprosthodontics.com/files/2018/09/Recipes-Banner.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
