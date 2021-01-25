import { Component } from '@angular/core';
import { Dvd } from './dvd/dvd.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  db: Dvd[] = [] as Dvd[];
}
