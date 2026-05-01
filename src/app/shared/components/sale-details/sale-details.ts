import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sale-details',
  imports: [MatDialogModule, MatButtonModule, MatDialogActions, MatListModule],
  templateUrl: './sale-details.html',
  styleUrl: './sale-details.css',
})
export class SaleDetails {}
