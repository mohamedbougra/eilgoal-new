import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  matchDetails: any; // Define a variable to hold the fetched match details

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
  }
}
