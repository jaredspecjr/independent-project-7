import { Component, Output } from '@angular/core';
import { newsStory } from './models/newsStory.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The New York Times';
  MasterNewsList: newsStory[] = [
    new newsStory('Unemployment Rate Falls to 3.9%, Lowest since 2000', 'By NATALIE KITROEFF', "With 164,000 jobs added in April, it was the 91st consecutive month of gains, far and away the longest streak of increases on record.", "The report is a sign that the job market has become even more competitive.", 0)
  ];
}
