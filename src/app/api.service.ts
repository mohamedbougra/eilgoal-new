import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseurl = 'https://v3.football.api-sports.io/';


  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '3183a9decc82768ea00b9b2bb012a2c5', // clé d'API
  });

  constructor(private http: HttpClient) {}

  getPokemon(id : number): Observable<any> {
    // L'URL spécifique pour récupérer des données sur une ligue de football
    const url = `${this.baseurl}leagues?id=${id}`;
    // Utilisation de la méthode get de HttpClient pour effectuer une requête GET
    // avec les en-têtes appropriés pour accéder à l'API
    return this.http.get<any>(url, { headers: this.headers });
  }
}
