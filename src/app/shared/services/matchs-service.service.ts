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
    'x-rapidapi-key': '9510d4263e33d16ebf91e6edade56b12', // clé d'API
  });
  constructor(private http: HttpClient) { }
  lastmatchs(): Observable<any> {
    const url = `${this.baseurl}fixtures?last=3&status=FT`;

    return this.http.get<any>(url, { headers: this.headers });
  }
  commingmatchs(): Observable<any> {
    const url = `${this.baseurl}fixtures?next=3`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  livematchs(): Observable<any> {
    const url = `${this.baseurl}fixtures?live=all`;

    return this.http.get<any>(url, { headers: this.headers });
  }
}
