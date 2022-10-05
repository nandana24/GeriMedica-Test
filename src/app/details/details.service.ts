import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Details } from './details-model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  public getDetais(): Observable<Details[]> {
    const url = "../../assets/to-render.json";
    return this.http.get<Details[]>(url);
  }
}
