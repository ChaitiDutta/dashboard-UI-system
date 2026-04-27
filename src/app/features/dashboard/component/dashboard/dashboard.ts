import { Component } from '@angular/core';
import { CardService } from '../../service/card';
import { Card } from '../../../../shared/components/card/card';
import { Card_Model } from '../../../../shared/models/card.model';
import { Table } from '../../../../shared/components/table/table';
import { Table_Model } from '../../../../shared/models/table.model';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  imports: [Card, Table, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isLargeScreen : boolean = false;
  stats : Card_Model[] = [];
  tableData: Table_Model[] = [];
  constructor(public card: CardService
  ){
    this.stats = this.card.getCards();
    this.tableData = this.card.getTable();
    console.log(this.stats);
    
  }



}
