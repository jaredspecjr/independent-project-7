import { Component, Output } from '@angular/core';
import { NewsStory } from './models/newsStory.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The New York Times';

  masterNewsStoryList: NewsStory[] = [
    new NewsStory('Unemployment Rate Falls to 3.9%, Lowest Since 2000', 'By NATALIE KITROEFF', 'With 164,000 jobs added in April, it was the 91st consecutive month of gains, far and away the longest streak of increases on record', 0),
    new NewsStory('U.S.-China Trade Talks End With Strong Demands', 'By KEITH BRADSHER', 'The list of U.S. demands was sweeping, and showed that the Trump administration has no intention of backing down.', 0)

  ];
}
