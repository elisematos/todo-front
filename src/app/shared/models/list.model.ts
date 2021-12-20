import {ListInterface, ItemInterface} from "../list.interface";

export class List {
  title?:string;
  items?: Item[] = [];

  constructor(listInterface: ListInterface) {
    this.title = listInterface.title;
    listInterface.itemsDto.forEach(i =>
    this.items?.push(new Item(i)))
  }
}

export class Item {
  name?:string;
  done?:boolean;

  constructor(itemInterface: ItemInterface) {
    this.name = itemInterface.name;
    this.done = itemInterface.done;
  }
}
