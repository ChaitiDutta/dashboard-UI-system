import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StatusData, Table_Model } from '../../models/table.model';

@Component({
  selector: 'app-table',
  imports: [CommonModule, MatTableModule, CurrencyPipe, DatePipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  displayedColumns : string[] = ['Name','Product','Amount','Status','Date'];
  dataSource = input.required<Table_Model[]>();
  tableData = new MatTableDataSource<Table_Model>([]);
  constructor(){
    effect(()=>{
      this.tableData.data = this.dataSource(); // this is to extract the data from table data model 
    })                        //bcz , Mat table doesn't expect Signal(), it expect array or 
  }
  getStatusCode(status: StatusData): string{
    switch(status){
      case StatusData.Completed :
      return 'Completed';
      case StatusData.Pending :
        return 'Pending';
        case StatusData.Shipped :
          return 'Shipped';
    }
  }
  diverseStyle(status: StatusData): string{
    switch(status){
      case StatusData.Completed:
        return 'green';
        case StatusData.Pending:
          return 'yellow';
        case StatusData.Shipped:
          return 'blue';
    }
}
}
