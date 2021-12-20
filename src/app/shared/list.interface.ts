export interface ListInterface {
  title:string;
  itemsDto: ItemInterface[];
}

export interface ItemInterface {
  name:string;
  done:boolean;
}
