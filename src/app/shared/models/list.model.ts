import {ListInterface, ItemInterface} from "../list.interface";

export class List {
  id?: number;
  title?:String;
  items?: Item[] = [];

  constructor(listInterface: ListInterface) {
    this.id = listInterface.id;
    this.title = listInterface.title;
    listInterface.itemsDto.forEach(i =>
    this.items?.push(new Item(i)))
  }
}

export class Item {
  id?:number;
  name?:String;
  done?:boolean;

  constructor(itemInterface: ItemInterface) {
    this.id = itemInterface.id;
    this.name = itemInterface.name;
    this.done = itemInterface.done;
  }
}
