import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private apiUrl = '/api/seo-data';

  constructor(private http: HttpClient) { }

  getSeoData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addSeoData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}