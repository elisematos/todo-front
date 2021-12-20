import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListInterface} from "../list.interface";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  baseURL:string ='http://localhost:8080/v1/lists/'

  constructor(private http: HttpClient) { }

  fetchLists(): Observable<ListInterface[]> {
    return this.http.get<ListInterface[]>(this.baseURL);
  }

}
