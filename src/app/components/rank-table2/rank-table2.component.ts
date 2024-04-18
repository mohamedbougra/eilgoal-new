import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SelectItemGroup } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { RatingModule } from 'primeng/rating';
import { Rank } from './rank';
import { RankLeaguesService } from '../../shared/services/rank-leagues.service';

interface Column {
    field: string;
    header: string;
  }

@Component({
  selector: 'app-rank-table2',
  templateUrl: './rank-table2.component.html',
  styleUrl: './rank-table2.component.css',
})
export class RankTable2Component {
    win_icon:string="../../assets/win.png";
    lose_icon:string="../../assets/lose.png";
    equal_icon:string="../../assets/equal.png";

    data!:any[];
    kk:string[]=[this.win_icon,this.lose_icon,this.equal_icon,this.equal_icon,this.win_icon];
    groupedCities: SelectItemGroup[];

    ranks:Rank[]=[]
    lasts=[];
  
    cols!: Column[];
    value:string="2";
    selectedCity: string | undefined;
    selected_recent?:string="";

    constructor(private rankservice:RankLeaguesService) {
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
    ngOnInit() {
        this.getRanks();
        this.selected_recent=this.selectedCity;
      }
      getRanks(){
        if(this.selected_recent!=this.selectedCity){
        let i=0;
        let numb=this.getId(this.selectedCity);
        this.data=[];
        this.ranks=[];
        this.rankservice.ranks(numb).subscribe(
          (respo)=>{
            this.data=respo.response[0].league.standings[0];
            for(let rk of this.data){
              this.ranks.push(
                {
                  class:rk.rank,
                  club:{
                    name:rk.team.name,
                    logo:rk.team.logo
                  },
                  W:rk.all.win,
                  D:rk.all.draw,
                  L:rk.all.lose,
                  poin:rk.points,
                  lasts: i<5? this.getMatchsReviews(rk.team.id,numb):[]
                }
              )
              i++;
              if(i==7){
              }
            }
          }
        )
      }
      }
      getMatchsReviews(id:number,id_1:number){
        let status_a:string[]=[];
        let iter:any[];
        this.rankservice.givlast5(id_1,id).subscribe(
          (respo)=>{
            iter=respo.response;
            for(let m of iter){

              if(m.teams.home.id==id){
                if(m.teams.home.winner==null){
                  status_a.push(this.equal_icon);
                }
                if(m.teams.home.winner==true){
                  status_a.push(this.win_icon);
                }
                if(m.teams.home.winner==false){
                  status_a.push(this.lose_icon);
                }
              }
              else{
                if(m.teams.away.winner==null){
                  status_a.push(this.equal_icon);
                }
                if(m.teams.away.winner==true){
                  status_a.push(this.win_icon);
                }
                if(m.teams.away.winner==false){
                  status_a.push(this.lose_icon);
                }
              }
            }
          });
          console.log(status_a);
        return status_a;
      }
      getId(nom:any){
        switch(nom){
          case 'Premier League': return 39;break;
          case 'La Liga': return 140;break;
          case 'Serie A': return 135;break;
          case 'Bundesliga': return 78;break;
          case 'Ligue 1': return 61;break;
          default:return 61;break;
        }
      }
    

}
