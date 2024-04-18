import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() rate: number = 0;
  starAmount = 5;
  starList: number[] = [];

  constructor() {}

  ngOnInit() {
    this.starList = Array(Math.floor(this.rate)).fill(0);
    // console.log(this.starList, this.rate);
  }
}
