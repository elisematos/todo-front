import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {ItemComponent} from "./item/item.component";
import {CreateListComponent} from "./create-list/create-list.component";

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'list/new', component: CreateListComponent},
  {path:'list/:id', component: ItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
