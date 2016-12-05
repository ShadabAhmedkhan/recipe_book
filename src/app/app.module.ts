import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RecpiesComponent } from './recpies/recpies.component';
import { RecpiesListComponent } from './recpies/recpies-list/recpies-list.component';
import { RecpiesItemsComponent } from './recpies/recpies-list/recpies-items/recpies-items.component';
import { RecipeDetailComponent } from './recpies/recipe-detail/recipe-detail.component';
<<<<<<< HEAD
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListAddComponent } from './shoping-list/shoping-list-add.component';
=======
>>>>>>> 82c7be260430ad27642d0650fe03cd98902ff514

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecpiesComponent,
    RecpiesListComponent,
    RecpiesItemsComponent,
<<<<<<< HEAD
    RecipeDetailComponent,
    ShopingListComponent,
    ShopingListAddComponent
=======
    RecipeDetailComponent
>>>>>>> 82c7be260430ad27642d0650fe03cd98902ff514
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
