import { Injectable } from '@angular/core';
import { Cafe } from '../models/cafe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private url = `${environment.URL_LIST_CAFES}`;
  constructor(private http: HttpClient) { }

  getAllCafes(): Observable<Cafe[]>{
    
    return this.http.get<Cafe[]>(this.url);
  }
}
