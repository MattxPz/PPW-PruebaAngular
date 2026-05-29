import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryListItem, CountryDetailItem } from '../models/country.interface';
import { environment } from '../../enviroments/enviroments';



@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;

  getItems(): Observable<CountryListItem[]> {
    return this.http.get<CountryListItem[]>(`${this.baseUrl}/all?fields=name,capital,flags`);
  }

  getItemById(id: string | number): Observable<CountryDetailItem[]> {
    return this.http.get<CountryDetailItem[]>(`${this.baseUrl}/name/${id}?fields=name,flags,capital,maps,population`);
  }
}