import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ListService} from "../shared/services/list.service";
import {List} from "../shared/models/list.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit {
  addListForm: FormGroup;
  title = new FormControl('', Validators.required)
  lists: List[]=[];
  newList: List;

  constructor(private listService: ListService, readonly router: Router) {
    this.addListForm = new  FormGroup({
      title: this.title
    })
    this.newList = {
      title: '',
      items: []
    }
  }

  ngOnInit(): void {
  }

  createList() {
    this.newList.title = this.addListForm.get('title')?.value;
    this.listService
      .addList(this.newList)
      .subscribe(list => {
          this.lists.push(list);
          this.router.navigateByUrl('/');
        }
      );
  }

}
