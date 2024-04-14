import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RankLeaguesService {
  public baseurl = 'https://v3.football.api-sports.io/standing?league=';


  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '9510d4263e33d16ebf91e6edade56b12', // clé d'API
  });
  constructor(private http: HttpClient) { }
  lastmatchs(id:number): Observable<any> {
    const url = `${this.baseurl}${id}&season=2024`;
    return this.http.get<any>(url, { headers: this.headers });
  }
 }
