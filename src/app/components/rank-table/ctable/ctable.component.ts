import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BehaviorSubject } from 'rxjs';

import { RatingModule } from 'primeng/rating';
import { Rank } from './rank';
import { RankLeaguesService } from '../../../shared/services/rank-leagues.service';
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-ctable',
  standalone: true,
  imports: [TableModule,RatingModule,TagModule],
  templateUrl: './ctable.component.html',
  styleUrl: './ctable.component.css'
})
export class CtableComponent {
  win_icon:string="../../../../assets/win.png";
  lose_icon:string="../../../../assets/lose.png";
  equal_icon:string="../../../../assets/equal.png";

  @Input() id_league?:string;

  data!:any[];
  kk:string[]=[this.win_icon,this.lose_icon,this.equal_icon,this.equal_icon,this.win_icon];

  ranks:Rank[]=[]
  lasts=[];

  cols!: Column[];
  value:string="2";

  constructor(private rankservice:RankLeaguesService) {}

  ngOnInit() {
    this.getRanks();
  }
  getRanks(){
    this.rankservice.ranks(61).subscribe(
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
              lasts:this.getMatchsReviews(rk.team.id,61)
            }
          )
          break;
        }
      }
    )
  }
  getMatchsReviews(id:number,id_1:number){
    let status_a:string[]=[];
    let iter:any[];
    this.rankservice.givlast5(61,id).subscribe(
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
    return status_a;
  }
  getId(nom:any){
    switch(nom){
      case 'Premier League': return 39;break;
      case 'La Liga': return 140;break;
      case 'Serie A': return 135;break;
      case 'Bundesliga': return 78;break;
      case 'Ligue 1': return 61;break;
      default:return 60;break;
    }
  }

  

}
