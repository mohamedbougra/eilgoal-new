import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchsServiceService {
  public baseurl = 'https://v3.football.api-sports.io/';
 

  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '546446bc637f5e656e8e2742edebb2ed', // clé d'API
  });
  constructor(private http: HttpClient) { }
  lastmatchs(id :number=2,line :number=7): Observable<any> {
    const url = `${this.baseurl}fixtures?league=${id}&last=${line}&status=FT`;

    return this.http.get<any>(url, { headers: this.headers });
  }
  commingmatchs(id :number=2,line :number=7): Observable<any> {
    const url = `${this.baseurl}fixtures?league=${id}&next=${line}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  livematchs(id :number=2,line :number=7): Observable<any> {
    const url = `${this.baseurl}fixtures?league=${id}&live=all`;

    return this.http.get<any>(url, { headers: this.headers });
  }
 
}
