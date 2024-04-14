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
  lastmatchs(): Observable<any> {
    const url = `${this.baseurl}fixtures?last=10`;

    return this.http.get<any>(url, { headers: this.headers });
  }
}
