import { Component, OnInit } from '@angular/core';
import {RecpiesListComponent} from './recpies-list/recpies-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
@Component({
  selector: 'app-recpies',
  templateUrl: './recpies.component.html'
})
export class RecpiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
