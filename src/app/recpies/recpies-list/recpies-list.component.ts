import { Component, OnInit , EventEmitter , Output} from '@angular/core';
import { Recipe } from '../recipe';
import {RecpiesItemsComponent} from './recpies-items/recpies-items.component';
@Component({
  selector: 'app-recpies-list',
  templateUrl: './recpies-list.component.html'
})
export class RecpiesListComponent implements OnInit {
recipes:Recipe[] =[];
@Output() recipeSelected = new EventEmitter<Recipe>();
recipe = new Recipe('Dummy','1222','http://thumbs3.ebaystatic.com/d/l225/m/mwJElNFGmrIXo8ucXNt1M4Q.jpg'); 
  constructor() { }

  ngOnInit() {
  }
onSelected(recipe: Recipe){
  this.recipeSelected.emit(recipe);
}
}
