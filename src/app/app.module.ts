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
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListAddComponent } from './shoping-list/shoping-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RecpiesComponent,
    RecpiesListComponent,
    RecpiesItemsComponent,
    RecipeDetailComponent,
    ShopingListComponent,
    ShopingListAddComponent
    
    
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
