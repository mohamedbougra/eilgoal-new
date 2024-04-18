import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    league: any = { id: undefined, name: '', icon: '' };

    constructor(public layoutService: LayoutService,public apiService : ApiService) { }
    public getPkm(pokemonId : number) {
        this.apiService.getPokemon(pokemonId).subscribe(response => {
            this.league.name=response.response[0].league.name;
            this.league.icon=response.response[0].league.icon;
            this.league.id=pokemonId;

        }, error => {
          console.error(error);
        });
      }
    ngOnInit() {
        this.getPkm(39);
        console.log( this.getPkm(39))
        this.model = [
            {
                label: 'Menu',
                items: [
                    { label: 'All', icon: 'pi pi-fw pi-table', routerLink: ['/dashboard'] },
                    { label: 'Live Football', icon: 'pi pi-fw pi-video', routerLink: ['/league',2] },
                    { label: 'Standings', icon: 'pi pi-fw pi-sort-numeric-up', routerLink: ['/league',2] },
                    { label: 'News', icon: 'pi pi-fw pi-align-center', routerLink: ['/league',2] },
                ]
            },
            {
                label: 'Football League',
                items: [
                    { label: 'Champions League', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',2] },
                    { label: 'Premier League', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',39] },
                    { label: 'La Liga', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',140] },
                    { label: 'Ligue 1', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',61] },
                    { label: 'Serie A', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',71] },
                    { label: 'Bundesliga', icon: 'pi pi-fw pi-globe', routerLink:  ['/league',78] },
                    ]
            },
            {
                label: 'Basketball League',
                items: [
                    { label: 'NBA', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/formlayout'] },
                    { label: 'EuroLeague', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/input'] },
                    { label: 'ACB Liga', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/floatlabel'] },
                    { label: 'NBL Australia', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/invalidstate'] },
                    { label: 'CBA China', icon: 'pi pi-fw pi-globe', routerLink: ['/uikit/button'] }
                ]
            },
            {
                label: 'Favorite club',
                items: [
                    { label: 'Chelsea FC', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Bayern Munchen', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Manchester City', icon: 'pi pi-fw pi-eye', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            }
        ];
    }
}
