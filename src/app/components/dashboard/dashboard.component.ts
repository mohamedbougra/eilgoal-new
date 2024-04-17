import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public pokemonId: number = -1;

  constructor(public authService: AuthService,public apiService: ApiService) {} // Assurez-vous que APIService est correctement injecté


  ngOnInit() {}

  public getPkm() {
    this.apiService.getPokemon(this.pokemonId).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
  }
  public Switch(){
    
  }
}