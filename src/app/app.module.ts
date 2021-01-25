import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './dvd/list/list.component';
import { AddItemComponent } from './dvd/add-item/add-item.component';
import { ItemComponent } from './dvd/list/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
