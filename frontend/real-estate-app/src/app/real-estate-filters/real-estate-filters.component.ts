import { Component } from '@angular/core';
import { FilterService } from '../filter.service'; // replace with the actual path to your service

@Component({
  selector: 'app-real-estate-filters',
  templateUrl: './real-estate-filters.component.html',
  styleUrls: ['./real-estate-filters.component.css']
})
export class RealEstateFiltersComponent {
  priceFrom: number = 0;
  priceTo: number = 0;
  sizeFrom: number = 0;
  sizeTo: number = 0;
  pricePerSqmFrom: number = 0;
  pricePerSqmTo: number = 0;
  roomsFrom: number = 0;
  roomsTo: number = 0;
  floorFrom: number = 0;
  floorTo: number = 0;
  location: string = '';

  constructor(private filterService: FilterService) { }

  applyFilters() {
    this.filterService.changeFilters({
      priceFrom: this.priceFrom,
      priceTo: this.priceTo,
      sizeFrom: this.sizeFrom,
      sizeTo: this.sizeTo,
      pricePerSqmFrom: this.pricePerSqmFrom,
      pricePerSqmTo: this.pricePerSqmTo,
      roomsFrom: this.roomsFrom,
      roomsTo: this.roomsTo,
      floorFrom: this.floorFrom,
      floorTo: this.floorTo,
      location: this.location
    });
  }
}
