import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RankLeaguesService {
  public baseurl = 'https://v3.football.api-sports.io/standings?league=';


  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '546446bc637f5e656e8e2742edebb2ed', // clé d'API
  });
  constructor(private http: HttpClient) { }
  ranks(id:number): Observable<any> {
    const url = `${this.baseurl}${id}&season=2023`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  givlast5(id:number,id_1:number): Observable<any> {
    const url = `https://v3.football.api-sports.io/fixtures?league=${id}&season=2023&team=${id_1}`;
    return this.http.get<any>(url, { headers: this.headers });
  }
 }
