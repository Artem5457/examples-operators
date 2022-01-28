import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { Item } from './app.component';

@Injectable({
  providedIn: 'root',
})

export class ItemsService {
  items$ = new BehaviorSubject<Item[]>([]);
  updateAction$ = new Subject();

  addItem(item: Item): void {
    this.items$.next([
      ...this.items$.value,
      item
    ]);
  }
}
