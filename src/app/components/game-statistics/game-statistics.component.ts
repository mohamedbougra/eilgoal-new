import { Component } from '@angular/core';

import { MatchDetailsService } from '../../shared/services/match-details.service';
@Component({
  selector: 'app-game-statistics',
  templateUrl: './game-statistics.component.html',
  styleUrl: './game-statistics.component.css'
})
export class GameStatisticsComponent {
  
  statistics: any;
  constructor(private detailsService : MatchDetailsService) {}

  ngOnInit(): void {
    this.detailsService.matchDetails().subscribe((response: any) => {
      this.statistics = response; // Assign the fetched data to statistics
      console.log(this.statistics); // Log the response to see the structure
      console.log(this.statistics.response[0].lineups[0].startXI[0].player.name);
    }, (error: any) => {
      console.error('Error fetching match details:', error); // Log any errors
    });
  }
}
