import { Component, OnInit } from '@angular/core';
import {ListService} from "../shared/services/list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item, List} from "../shared/models/list.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  list: List | undefined;
  items: Item[] = [];
  permaLink: Number = 0;

  constructor(readonly listService: ListService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.permaLink = params['id'];
    });

    this.listService.fetchListById(this.permaLink).subscribe((data: List) => {
      this.list = data;
    },(err: any) => {
      console.log('Failure response')
      }
    )
  }
}
