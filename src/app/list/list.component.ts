import { Component, OnInit } from '@angular/core';
import {ListInterface} from "../shared/list.interface";
import {ListService} from "../shared/services/list.service";
import {List} from "../shared/models/list.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[]=[];
  constructor(readonly listService: ListService) { }

  ngOnInit(): void {
    this.getLists()
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
