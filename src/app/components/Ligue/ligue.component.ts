import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ApiService } from '../../api.service';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute, Router, RouterModule } from '@angular/router'; // Add this import
import { MatchsServiceService } from '../../shared/services/matchs-service.service';
import { Match } from '../match-table/Match';

@Component({
  selector: 'app-ligue',
  templateUrl: './ligue.component.html',
  styleUrl: './ligue.component.css'
})
export class LigueComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}
  


    data!:any[];
    data_1!:any[];
    data_2!:any[];
    id : number | undefined;
    matchs:Match[]=[];
    latest_matchs:Match[]=[];
    comming_matchs:Match[]=[];
    live_matchs:Match[]=[];
    color_stat:string="LT";
    @Input() which_match!:string | undefined;
  
    constructor(private matchservice:MatchsServiceService,private route: ActivatedRoute, private router: Router) {
 window
    }
  
    ngOnInit() {

       this.route.params.subscribe(params => {
        this.id = params['id']; // Récupérer le paramètre 'id' de l'URL
        // Faites ce que vous voulez avec l'ID récupéré, comme charger les données correspondantes
    });
      this.lastones();
      this.comming();
      this.living();
      this.items = [
        { label: 'Latest Match', icon: 'pi pi-fw pi-home' },
        { label: 'Coming Match', icon: 'pi pi-fw pi-calendar' },
        { label: 'Live Games', icon: 'pi pi-fw pi-file' }
    ];

    this.activeItem = this.items[0];
      // Recharger le composant en naviguant vers la même URL avec les nouveaux paramètres
      this.router.navigateByUrl('/league/' + this.id, { skipLocationChange: true }).then(() => {
        this.router.navigate(['/league/' + this.id]);});
    }
  
    lastones():void{
  
      this.matchservice.lastmatchs(this.id,15).subscribe(
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
  
      this.matchservice.commingmatchs(this.id,15).subscribe(
        (response) => {
          this.data_1 = response.response;
          for(let match of this.data_1){
              this.comming_matchs.push(
                {                ids:match.fixture.id,

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
      this.matchservice.livematchs(this.id,15).subscribe(
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