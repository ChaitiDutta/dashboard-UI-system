import { Component } from '@angular/core';
import { CardService } from '../../service/card';
import { Card } from '../../../../shared/components/card/card';
import { Card_Model } from '../../../../shared/models/card.model';
import { Table } from '../../../../shared/components/table/table';
import { ActivityList, Table_Model } from '../../../../shared/models/table.model';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ActivityTable } from '../../../../shared/components/activity-table/activity-table';

@Component({
  selector: 'app-dashboard',
  imports: [Card, Table, CommonModule,ActivityTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  isLargeScreen : boolean = false;
  stats : Card_Model[] = [];
  tableData: Table_Model[] = [];
  activityList: ActivityList[] = [];
  constructor(public card: CardService
  ){
    this.stats = this.card.getCards();
    this.tableData = this.card.getTable();
    this.activityList = this.card.getActivities();
    console.log(this.stats);
    
  }



}
