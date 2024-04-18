import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-match-table',

  templateUrl: './match-table.component.html',
  styleUrl: './match-table.component.css'
})
export class MatchTableComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Latest Match', icon: 'pi pi-fw pi-home' },
          { label: 'Coming Match', icon: 'pi pi-fw pi-calendar' },
          { label: 'Live Games', icon: 'pi pi-fw pi-file' }
      ];

      this.activeItem = this.items[0];

  }
  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
}
  


  
}