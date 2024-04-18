import { Component } from '@angular/core';
import { MatchDetailsService } from '../../shared/services/match-details.service';

@Component({
  selector: 'app-injuries-card',
  templateUrl: './injuries-card.component.html',
  styleUrl: './injuries-card.component.css'
})
export class InjuriesCardComponent {
  injuriesCard: any;
  constructor(private detailsService : MatchDetailsService) {}

  ngOnInit(): void {
    this.detailsService.getInjuries().subscribe((response: any) => {
      this.injuriesCard = response; // Assign the fetched data to injuriesCard
      console.log(this.injuriesCard); // Log the response to see the structure
    }, (error: any) => {
      console.error('Error fetching match details:', error); // Log any errors
    });
  }
}
