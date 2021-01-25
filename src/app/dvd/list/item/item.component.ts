import { Component, Input } from '@angular/core';
import { Dvd } from '../../dvd.model';

@Component({
  selector: '[app-list-item]',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() dvd!: Dvd;

  get releaseDate() {
    return (new Date(this.dvd.releaseDate)).toLocaleDateString('en-GB')
  }

  constructor() {
  }
}
