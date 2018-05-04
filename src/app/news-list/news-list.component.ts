import { Component, Input} from '@angular/core';
import { NewsStory } from '../models/newsStory.model';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent {
  @Input() childNewsStoryList: NewsStory[];


}
