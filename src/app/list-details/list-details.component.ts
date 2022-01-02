import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListService} from "../shared/services/list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item, List} from "../shared/models/list.model";
import {ListInterface} from "../shared/list.interface";

@Component({
  selector: 'app-item',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit, OnDestroy {
  list: List = {
    title:'',
    items:[]
  };
  private sub: any;

  constructor(readonly listService: ListService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe(params => {
      let id = +params['id'];
      this.listService.fetchListById(id).subscribe((data: ListInterface) => {
          this.list = new List(data);
        },(err: any) => {
          console.log('Failure response')
        }
      )
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
