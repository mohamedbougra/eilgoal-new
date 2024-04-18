import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatchDetailsService } from '../../shared/services/match-details.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  matchDetails: any; // Define a variable to hold the fetched match details
 id : any;
  constructor(private detailsService : MatchDetailsService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.id = params['id']; // Récupérer le paramètre 'id' de l'URL
      // Faites ce que vous voulez avec l'ID récupéré, comme charger les données correspondantes
  });
    this.detailsService.matchDetails(this.id).subscribe((response: any) => {
      this.matchDetails = response; // Assign the fetched data to matchDetails
      console.log(this.matchDetails); // Log the response to see the structure
      console.log(this.matchDetails.response[0].lineups[0].startXI[0].player.name);
    }, (error: any) => {
      console.error('Error fetching match details:', error); // Log any errors
    });
  }
}