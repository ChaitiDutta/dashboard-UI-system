import { Injectable } from '@angular/core';
import { Card_Model } from '../../../shared/models/card.model';
import { StatusData, Table_Model } from '../../../shared/models/table.model';
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

getTable(): Table_Model[]{
  return [
  {
    name: "John Doe",
    product: "Laptop Pro",
    amount: 1299,
    status: StatusData.Completed,
    date: new Date("2026-04-20")
  },
  {
    name: "Sarah Smith",
    product: "Wireless Mouse",
    amount: 49,
    status: StatusData.Pending,
    date: new Date("2026-04-20")
  },
  {
    name: "Mike Johnson",
    product: "USB-C Hub",
    amount: 79,
    status: StatusData.Completed,
    date: new Date("2026-04-19")
  },
  {
    name: "Emily Brown",
    product: "Mechanical Keyboard",
    amount: 159,
    status: StatusData.Completed,
    date: new Date("2026-04-19")
  },
  {
    name: "David Lee",
    product: "Monitor 27\"",
    amount: 399,
    status: StatusData.Shipped,
    date: new Date("2026-04-18")
  }
]
}

}
