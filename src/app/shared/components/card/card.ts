import { Component, computed, input } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { Card_Model } from '../../models/card.model';
import { CommonModule, CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-card',
  imports: [MaterialModule, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  card = input.required<Card_Model>();
  position = input.required<number>();
  // get pacentageColor(){
  //   return this.card().percentage >=0? 'success' : 'failed';
  // }

formatValue = computed(() => {
  if(this.position() == 0){
    return new CurrencyPipe('en-US').transform(this.card().value, 'USD');
  }else if(this.position() == 1 || this.position() == 2){
     return new DecimalPipe('en-US').transform(this.card().value, '1.0-0');
  }else{
         return new PercentPipe('en-US').transform(this.card().value, '1.0-2');
  }
  // return this.card().value.toString();
})
}