import { Component, Input } from '@angular/core';

import { Dvd } from '../dvd.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  @Input() db!: Dvd[];
  model: Dvd = this.getNewModel();
  constructor() { }

  onSubmit() {
    this.db.push(this.model);
    this.model = this.getNewModel();
    return false;
  }

  getNewModel(): Dvd {
    return {
      title: "",
      releaseDate: "",
      rating: 1,
      cost: 1,
      director: "",
      genre: ""
    };
  }
}
