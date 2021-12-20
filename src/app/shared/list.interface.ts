export interface ListInterface {
  id: String;
  title:String;
  itemsDto: ItemInterface[];
}

export interface ItemInterface {
  id:String;
  name:String;
  done:boolean;
}
