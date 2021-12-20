import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListInterface} from "../list.interface";
import {List} from "../models/list.model";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseURL:string ='http://localhost:8080/v1/lists/'

  constructor(private http: HttpClient) { }

  addList(list: List) : Observable<ListInterface> {
    return this.http.post<ListInterface>(this.baseURL, list);
  }

  fetchLists(): Observable<ListInterface[]> {
    return this.http.get<ListInterface[]>(this.baseURL);
  }

  fetchListById(permaLink: Number): Observable<ListInterface> {
    return this.http.get<ListInterface>(this.baseURL + permaLink)
  }

}
