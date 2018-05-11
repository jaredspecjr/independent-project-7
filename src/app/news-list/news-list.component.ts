import { Component } from '@angular/core';
import { NewsStory } from '../newsStory.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  filterByCategory: string ="allStories";
  // @Input() childNewsStoryList: NewsStory[];
  // @Output() clickSender = new EventEmitter();
constructor(private router: Router) { }
newsStories: NewsStory[] = [
  new NewsStory('Unemployment Rate Falls to 3.9%, Lowest Since 2000', 'By NATALIE KITROEFF', 'With 164,000 jobs added in April, it was the 91st consecutive month of gains, far and away the longest streak of increases on record', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 0, '', 1),
  new NewsStory('U.S.-China Trade Talks End With Strong Demands', 'By KEITH BRADSHER', 'The list of U.S. demands was sweeping, and showed that the Trump administration has no intention of backing down.', 'Lorem ipsum dolor sit amet,  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 0, '', 2)
];

  // onChange(optionFromMenu){
  //   this.filterByCategory = optionFromMenu;
  // }

  goToDetailPage(clickedNewsStory: NewsStory) {
    this.router.navigate(['newsStories', clickedNewsStory.id]);
  }
  // titleClicked(newsToShow: NewsStory) {
  //   this.clickSender.emit(newsToShow);
  // }
  // commentButtonClicked(commentToShow: NewsStory) {
  //   this.clickSender.emit(commentToShow);
  // }
}
