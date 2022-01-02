import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {ListDetailsComponent} from "./list-details/list-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListNewComponent} from "./list-new/list-new.component";

const routes: Routes = [
  { path: '',   redirectTo: '/list', pathMatch: 'full' },
  {path:'list', component:ListComponent},
  {path:'list-details/:id', component: ListDetailsComponent},
  {path:'list/new', component: ListNewComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
