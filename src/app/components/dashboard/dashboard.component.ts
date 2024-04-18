import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ApiService } from '../../api.service';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router'; // Add this import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchDetailsService } from '../../shared/services/match-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public pokemonId: number = -1;
  matchDetails: any;
  injuriesCard: any;
  
  constructor(public authService: AuthService, public apiService: ApiService,private http: HttpClient ,private detailsService:MatchDetailsService) {} // Make sure ApiService is correctly injected

  routeItems: MenuItem[] = [];
  ngOnInit() {
    this.routeItems = [
      { label: 'Latest Match', routerLink: '/latest'},
      { label: 'Coming Match', routerLink: '/coming' },
      
    ];
    // Define the headers
    const headers = new HttpHeaders({
      'x-apisports-key': '546446bc637f5e656e8e2742edebb2ed',
      'X-RapidAPI-Host': 'v3.football.api-sports.io'
    });

    // Make the HTTP GET request when the component initializes
    this.http.get('https://v3.football.api-sports.io/fixtures?id=1035433', { headers })
      .subscribe((response: any) => {
        this.matchDetails = response; // Assign the fetched data to matchDetails
        console.log(this.matchDetails); // Log the response to see the structure
      }, (error: any) => {
        console.error('Error fetching match details:', error); // Log any errors
      });
      this.detailsService.getInjuries().subscribe((response: any) => {
        this.injuriesCard = response; // Assign the fetched data to injuriesCard
        console.log(this.injuriesCard); // Log the response to see the structure
      }, (error: any) => {
        console.error('Error fetching match details:', error); // Log any errors
      });
  }

}
