import { Component, Input, Output } from '@angular/core';
import { NewsStory } from './newsStory.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The New York Times';
}
