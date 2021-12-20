import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import {CommonModule} from "@angular/common";
import {ListService} from "./shared/services/list.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateListComponent } from './create-list/create-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    CreateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
