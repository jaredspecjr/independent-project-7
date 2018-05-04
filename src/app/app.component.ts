import { Component, Input, Output } from '@angular/core';
import { NewsStory } from './models/newsStory.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The New York Times';
  selectedNewsStory = null;
  commentSection = 'Enter a Comment';

  masterNewsStoryList: NewsStory[] = [
    new NewsStory('Unemployment Rate Falls to 3.9%, Lowest Since 2000', 'By NATALIE KITROEFF', 'With 164,000 jobs added in April, it was the 91st consecutive month of gains, far and away the longest streak of increases on record', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 0, ''),
    new NewsStory('U.S.-China Trade Talks End With Strong Demands', 'By KEITH BRADSHER', 'The list of U.S. demands was sweeping, and showed that the Trump administration has no intention of backing down.', 'Lorem ipsum dolor sit amet,  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 0, '')
  ];

  finishedCommenting() {
    this.selectedNewsStory = null;
  }

  finishedReading() {
    this.selectedNewsStory = null;
  }
  showInfo(clickedNewsStory) {
    this.selectedNewsStory = clickedNewsStory;
  }
  makeComment(clickedComment) {
    this.selectedNewsStory = clickedComment;
  }
}
