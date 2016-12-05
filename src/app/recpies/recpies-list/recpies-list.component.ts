<<<<<<< HEAD
import { Component, OnInit , EventEmitter , Output} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 82c7be260430ad27642d0650fe03cd98902ff514
import { Recipe } from '../recipe';
import {RecpiesItemsComponent} from './recpies-items/recpies-items.component';
@Component({
  selector: 'app-recpies-list',
  templateUrl: './recpies-list.component.html'
})
export class RecpiesListComponent implements OnInit {
recipes:Recipe[] =[];
<<<<<<< HEAD
@Output() recipeSelected = new EventEmitter<Recipe>();
=======
>>>>>>> 82c7be260430ad27642d0650fe03cd98902ff514
recipe = new Recipe('Dummy','1222','http://thumbs3.ebaystatic.com/d/l225/m/mwJElNFGmrIXo8ucXNt1M4Q.jpg'); 
  constructor() { }

  ngOnInit() {
  }
onSelected(recipe: Recipe){
<<<<<<< HEAD
  this.recipeSelected.emit(recipe);
=======
  
>>>>>>> 82c7be260430ad27642d0650fe03cd98902ff514
}
}
