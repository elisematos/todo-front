import { Component, OnInit } from '@angular/core';
import {ListInterface} from "../shared/list.interface";
import {ListService} from "../shared/services/list.service";
import {List} from "../shared/models/list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[]=[];
  constructor(readonly listService: ListService, private router: Router) { }

  ngOnInit(): void {
    this.getLists()
  }

  newList() {
    this.router.navigateByUrl('list/new');
  }

  getLists() {
    this.listService.fetchLists().subscribe(
      (data:ListInterface[]) => {
        data.forEach(l => {
          this.lists.push(new List(l));
        })
      },
      error => {
        console.error("error getting lists")
      }
    )
  }
}
