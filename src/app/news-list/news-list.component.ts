import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NewsStory } from '../models/newsStory.model';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  filterByCategory: string ="allStories";
  @Input() childNewsStoryList: NewsStory[];
  @Output() clickSender = new EventEmitter();

  onChange(optionFromMenu){
    this.filterByCategory = optionFromMenu;
  }
  titleClicked(newsToShow: NewsStory) {
    this.clickSender.emit(newsToShow);
  }
  commentButtonClicked(commentToShow: NewsStory) {
    this.clickSender.emit(commentToShow);
  }
}
