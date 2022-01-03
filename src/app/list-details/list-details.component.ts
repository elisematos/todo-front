import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListService} from "../shared/services/list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item, List} from "../shared/models/list.model";
import {ListInterface} from "../shared/list.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-item',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit, OnDestroy {
  addItemForm: FormGroup;
  name = new FormControl('', Validators.required)
  list: List = {
    title:'',
    items:[]
  };
  newItem: Item;
  private sub: any;

  constructor(readonly listService: ListService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.addItemForm = new  FormGroup({
      name: this.name
    })
    this.newItem = {
      name: ''
    }
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      this.listService.fetchListById(id).subscribe((data: ListInterface) => {
          this.list = new List(data);
        }
      );
    });
  }

  changeCheck(id: any) {
    this.listService.changeCheck(id).subscribe();
  }

  createItem() {
    // @ts-ignore
    this.newItem.name = this.addItemForm.get('name').value;
    this.listService.addItem( this.list.id, this.newItem,).subscribe(item => {
          // @ts-ignore
        this.list.items.push(item);
        }
      );
  }

  deleteList() {
    this.listService.deleteList(this.list.id).subscribe();
    this.router.navigateByUrl('/');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
