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
    'x-rapidapi-key': '546446bc637f5e656e8e2742edebb2ed', // clé d'API
  });

  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<any> {
    // L'URL spécifique pour récupérer des données sur une ligue de football
    const url = `${this.baseurl}leagues/`;

    // Utilisation de la méthode get de HttpClient pour effectuer une requête GET
    // avec les en-têtes appropriés pour accéder à l'API
    return this.http.get<any>(url, { headers: this.headers });
  }
}
