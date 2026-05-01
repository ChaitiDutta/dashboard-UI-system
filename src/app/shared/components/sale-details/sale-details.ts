import { Component, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatDivider, MatListModule } from '@angular/material/list';
import { Table_Model } from '../../models/table.model';
import { CurrencyPipe } from '@angular/common';
import { SharedService } from '../../shared-service';

@Component({
  selector: 'app-sale-details',
  imports: [MatDialogModule, MatButtonModule, MatDialogActions, MatListModule, CurrencyPipe, MatDivider],
  templateUrl: './sale-details.html',
  styleUrl: './sale-details.css',
})
export class SaleDetails {
  tableData : Table_Model = inject(MAT_DIALOG_DATA);

  constructor( public status: SharedService){
    // this.tableData.set(inject(MAT_DIALOG_DATA));
  }
}
