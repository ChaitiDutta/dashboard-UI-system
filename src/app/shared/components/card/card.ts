import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-card',
  imports: [MaterialModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {}
