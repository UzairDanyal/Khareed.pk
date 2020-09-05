/*
 * khareed.pk
 * uzair usama
 
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
@Input() ratingValue: any;
  constructor(
  ) {
  }
  findFill(fill) {
  }
}
