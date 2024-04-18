import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { MatchsServiceService } from '../../../shared/services/matchs-service.service';
import { Match } from '../Match';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-table',
 
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data!:any[];
  data_1!:any[];
  data_2!:any[];

  matchs:Match[]=[];
  latest_matchs:Match[]=[];
  comming_matchs:Match[]=[];
  live_matchs:Match[]=[];
  color_stat:string="LT";
  @Input() which_match!:string | undefined;

  constructor(private matchservice:MatchsServiceService) {


  }

  ngOnInit() {
    this.lastones();
    this.comming();
    this.living()
  }

  lastones():void{

    this.matchservice.lastmatchs(2,7).subscribe(
      (response) => {
        this.data = response.response;
        for(let match of this.data){
            this.latest_matchs.push(
              {
                ids:match.fixture.id,
                team1:{name:match.teams.home.name,logo:match.teams.home.logo},
                team2:{name:match.teams.away.name,logo:match.teams.away.logo},
                goal_1:match.goals.home,
                goal_2:match.goals.away,
                status:match.fixture.status.long,
                date:match.fixture.date.substring(0,16)
              }
            )
        
        }
        
        console.log(this.latest_matchs);

      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

  }
  comming():void{

    this.matchservice.commingmatchs(2,7).subscribe(
      (response) => {
        this.data_1 = response.response;
        for(let match of this.data_1){
            this.comming_matchs.push(
              {
                ids:match.fixture.id,
                team1:{name:match.teams.home.name,logo:match.teams.home.logo},
                team2:{name:match.teams.away.name,logo:match.teams.away.logo},
                goal_1:match.goals.home,
                goal_2:match.goals.away,
                status:match.fixture.status.long,
                date:match.fixture.date.substring(0,16)

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
  living():void{
    this.matchservice.livematchs(2,8).subscribe(
      (response) => {
        this.data_2 = response.response;
        for(let match of this.data_2){

            this.live_matchs.push(
              {
                ids:match.fixture.id,
                team1:{name:match.teams.home.name,logo:match.teams.home.logo},
                team2:{name:match.teams.away.name,logo:match.teams.away.logo},
                goal_1:match.goals.home,
                goal_2:match.goals.away,
                status:match.fixture.status.long,
                date:match.fixture.date.substring(0,16)

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

  choose_match(){
    switch(this.which_match){
      case 'Latest Match':
        this.color_stat='LT';
        return this.latest_matchs;
      case 'Coming Match':
        this.color_stat='CM';
        return this.comming_matchs;
      case 'Live Games':
        this.color_stat='LV';
        return this.live_matchs;
      default:
        this.color_stat='CM';
        return this.latest_matchs;
    }
  }


}