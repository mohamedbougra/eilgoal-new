import { Component, Input } from '@angular/core';
import { MatchDetailsService } from '../../shared/services/match-details.service';
@Component({
  selector: 'app-teamlineup',
  templateUrl: './teamlineup.component.html',
  styleUrl: './teamlineup.component.css'
})
export class TeamlineupComponent {
  matchDetailsForLineup: any;

  constructor(private detailsService : MatchDetailsService) {}

  ngOnInit(): void {
    this.detailsService.matchDetails().subscribe((response: any) => {
      this.matchDetailsForLineup = response; // Assign the fetched data to matchDetailsForLineup
      console.log(this.matchDetailsForLineup); // Log the response to see the structure
      console.log(this.matchDetailsForLineup.response[0].lineups[0].startXI[0].player.name);
    }, (error: any) => {
      console.error('Error fetching match details:', error); // Log any errors
    });
  }
}
