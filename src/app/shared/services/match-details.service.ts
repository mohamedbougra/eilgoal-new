import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchDetailsService {
  private headers = new HttpHeaders({
    'x-apisports-key': '546446bc637f5e656e8e2742edebb2ed',
    'X-RapidAPI-Host': 'v3.football.api-sports.io',
  });
  public baseurl = 'https://v3.football.api-sports.io/';
  constructor(private http: HttpClient) {}

  matchDetails(): Observable<any> {
    const url = `${this.baseurl}fixtures?id=1035433`;

    return this.http.get<any>(url, { headers: this.headers });
  }
}
