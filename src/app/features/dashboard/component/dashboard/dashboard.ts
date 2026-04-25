import { Component } from '@angular/core';
import { CardService } from '../../service/card';
import { Card } from '../../../../shared/components/card/card';
import { Card_Model } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-dashboard',
  imports: [Card],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats : Card_Model[] = [];
  constructor(public card: CardService){
    this.stats = this.card.getCards();
    console.log(this.stats);
  }



}
