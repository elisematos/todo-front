export interface ListInterface {
  id: number;
  title:String;
  itemsDto: ItemInterface[];
}

export interface ItemInterface {
  id:number;
  name:String;
  done:boolean;
}
