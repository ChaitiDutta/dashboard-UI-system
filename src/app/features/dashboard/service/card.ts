import { Injectable } from '@angular/core';
import { Card_Model } from '../../../shared/models/card.model';
@Injectable({
  providedIn: 'root',
})
export class Card {

  getCards(): Card_Model[]{
    return[
      { main_icon: 'attach_money',
    icon: 'north_east',
    isPositive: true,
    percentage:'12.5 %',
    label:'Total Revenue',
    value:62450
    },
     { main_icon: 'group',
    icon: 'north_east',
    isPositive: true,
    percentage:'16.4 %',
    label:'Active Users',
    value:3120
    },
  ]
}

}
