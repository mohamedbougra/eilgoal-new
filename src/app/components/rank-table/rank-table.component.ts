import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItemGroup } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-rank-table',
  standalone: true,
  imports: [DropdownModule,CommonModule,FormsModule],
  templateUrl: './rank-table.component.html',
  styleUrl: './rank-table.component.css',
})
export class RankTableComponent {
  groupedCities: SelectItemGroup[];

    selectedCity: string | undefined;

    constructor() {
        this.groupedCities = [
            {
                label: 'England',
                value: '39',
                image:"https://media.api-sports.io/flags/gb.svg",
                items: [
                    { label: 'Premier League', value: 'Premier League' },
                ]
            },
            {
                label: 'Spain',
                value: '140',
                image:"https://media.api-sports.io/flags/es.svg",
                items: [
                    { label: 'La Liga', value: 'La Liga' }
                ]
            },
            {
              label: 'Italy',
              value: '135',
              image:"https://media.api-sports.io/flags/it.svg",
              items: [
                  { label: 'Serie A', value: 'Serie A' }
              ]
          },
          {
            label: 'Germany',
            value: '78',
            image:"https://media.api-sports.io/flags/de.svg",
            items: [
                { label: 'Bundesliga', value: 'Bundesliga' }
            ]
        },
        {
          label: 'France',
          value: '61',
          image:"https://media.api-sports.io/flags/fr.svg",
          items: [
              { label: 'Ligue 1', value: 'Ligue 1' }
          ]
      }
        ];
        console.log(this.selectedCity)

    }

}
