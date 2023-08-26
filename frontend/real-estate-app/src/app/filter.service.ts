import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterSource = new BehaviorSubject({
    priceFrom: null,
    priceTo: null,
    sizeFrom: null,
    sizeTo: null,
    pricePerSqmFrom: null,
    pricePerSqmTo: null,
    roomsFrom: null,
    roomsTo: null,
    floorFrom: null,
    floorTo: null,
    location: null
  });

  currentFilters = this.filterSource.asObservable();

  constructor() { }

  changeFilters(filters: any) {
    this.filterSource.next(filters);
  }
}
