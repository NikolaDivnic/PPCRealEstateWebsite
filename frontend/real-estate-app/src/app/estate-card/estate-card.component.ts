// estate-card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estate-card',
  templateUrl: './estate-card.component.html',
  styleUrls: ['./estate-card.component.css']
})
export class EstateCardComponent {
  @Input() estate: any; // This property will receive the data from the parent component
}
