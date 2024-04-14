import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

import { RatingModule } from 'primeng/rating';
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
  products=[];

  cols!: Column[];
  value:string="2";

  constructor() {}

  ngOnInit() {

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' },
          { field: 'inventoryStatus', header: 'Status' },
          { field: 'rating', header: 'Rating' }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return 'danger'
      }
  }

}
