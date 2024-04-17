import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchDetailsService } from '../../shared/services/match-details.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  matchDetails: any; // Define a variable to hold the fetched match details

  constructor(private detailsService : MatchDetailsService) {}

  ngOnInit(): void {
    this.detailsService.matchDetails().subscribe((response: any) => {
      this.matchDetails = response; // Assign the fetched data to matchDetails
      console.log(this.matchDetails); // Log the response to see the structure
      console.log(this.matchDetails.response[0].lineups[0].startXI[0].player.name);
    }, (error: any) => {
      console.error('Error fetching match details:', error); // Log any errors
    });
  }
}
