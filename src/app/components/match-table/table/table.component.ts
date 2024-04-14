import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';



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
            return 'danger';
      }
  }
}