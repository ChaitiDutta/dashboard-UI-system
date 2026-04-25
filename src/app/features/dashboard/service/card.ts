import { Injectable } from '@angular/core';
import { Card_Model } from '../../../shared/models/card.model';
@Injectable({
  providedIn: 'root',
})
export class CardService {

  getCards(): Card_Model[]{
    return[
      { main_icon: 'attach_money',
        isPositive: true,
      percentage:12.5,
      label:'Total Revenue',
    value:62450
    },
     { main_icon: 'group',
      isPositive: true,
    percentage:16.4 ,
    label:'Active Users',
    value:3120
    },
    { main_icon: 'shopping_cart',
        isPositive: true,
      percentage:8.2,
      label:'Total Orders',
    value:1847
    },
     { main_icon: 'group',
      isPositive: false,
    percentage:2.7 ,
    label:'Growth Rate',
    value:0.238
    },
  ]
}

}
