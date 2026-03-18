import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [SearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
