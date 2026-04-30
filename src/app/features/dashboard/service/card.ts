import { Injectable } from '@angular/core';
import { Card_Model } from '../../../shared/models/card.model';
import { ActivityList, StatusData, Table_Model } from '../../../shared/models/table.model';
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

 getActivities(): ActivityList[] {
    return [
      {
        id: 1,
        user: 'John Doe',
        action: 'made a purchase of $1,299',
        time: '2 minutes ago',
        type: 'purchase'
      },
      {
        id: 2,
        user: 'Sarah Smith',
        action: 'signed up for newsletter',
        time: '15 minutes ago',
        type: 'signup'
      },
      {
        id: 3,
        user: 'Mike Johnson',
        action: 'updated shipping address',
        time: '1 hour ago',
        type: 'update'
      },
      {
        id: 4,
        user: 'Emily Brown',
        action: 'made a purchase of $159',
        time: '2 hours ago',
        type: 'purchase'
      },
      {
        id: 5,
        user: 'David Lee',
        action: 'requested refund',
        time: '3 hours ago',
        type: 'refund'
      }
    ];
  }

}
