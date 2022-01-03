import { Component, OnInit } from '@angular/core';
import {ListInterface} from "../shared/list.interface";
import {ListService} from "../shared/services/list.service";
import {List} from "../shared/models/list.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  addListForm: FormGroup;
  title = new FormControl('', [Validators.required])
  lists: List[]=[];
  newList: List;

  constructor(readonly listService: ListService) {
    this.addListForm = new  FormGroup({
      title: this.title
    })
    this.newList = {
      title: '',
      items: []
    }
  }

  ngOnInit(): void {
    this.getLists()
  }

  createList() {
    // @ts-ignore
    this.newList.title = this.addListForm.get('title').value;
    this.listService
      .addList(this.newList)
      .subscribe(list => {
          this.lists.push(list);
        }
      );
  }

  getLists() {
    this.listService.fetchLists().subscribe(
      (data:ListInterface[]) => {
        this.lists = [];
        data.forEach(l => {
          this.lists.push(new List(l));
        })
      }
    )
  }

  deleteList(id: any) {
    this.listService.deleteList(id).subscribe(
      () => this.getLists()
    )
  }
}
