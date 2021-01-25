import { Component, Input } from '@angular/core';

import { Dvd } from '../dvd.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() db!: Dvd[];
  constructor() { }
}
