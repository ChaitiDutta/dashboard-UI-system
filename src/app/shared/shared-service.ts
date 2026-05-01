import { Injectable } from '@angular/core';
import { StatusData } from './models/table.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
   getStatusCode(status: StatusData): string{
    switch(status){
      case StatusData.Completed :
      return 'Completed';
      case StatusData.Pending :
        return 'Pending';
        case StatusData.Shipped :
          return 'Shipped';
    }
  }
}
