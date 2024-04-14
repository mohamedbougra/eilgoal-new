import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { MatchsServiceService } from '../../../shared/services/matchs-service.service';
import { Match } from '../Match';



@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,RatingModule,TagModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products=[
    {
      code:'1',
      name:'Argentine',
      category:'cccc',
      quantity:'2222',
      inventoryStatus:'INSTOCK',
      rating:'2'
    },
    {
      code:'1',
      name:'Argentine',
      category:'cccc',
      quantity:'2222',
      inventoryStatus:'INSTOCK',
      rating:'2'
    },
    {
      code:'1',
      name:'Argentine',
      category:'cccc',
      quantity:'2222',
      inventoryStatus:'INSTOCK',
      rating:'2'
    },
  ]
  cols!: any;
  data!:any[];
  matchs:Match[]=[];

  constructor(private matchservice:MatchsServiceService) {}

  ngOnInit() {
      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: 'inventoryStatus', header: 'Status' },
          { field: 'rating', header: 'Rating' }
      ];
      this.lastones();

  }

  lastones():void{

    this.matchservice.lastmatchs().subscribe(
      (response) => {
        this.data = response.response;
        for(let match of this.data){
          this.matchs.push(
            {
              team1:{name:match.teams.home.name,logo:match.teams.home.logo},
              team2:{name:match.teams.away.name,logo:match.teams.away.logo},
              goal_1:match.goals.home,
              goal_2:match.goals.away,
              status:match.fixture.status.long
            }
          )
        }
        
        console.log(this.matchs);

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }


}