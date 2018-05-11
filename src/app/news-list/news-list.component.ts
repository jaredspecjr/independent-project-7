import { Component, OnInit } from '@angular/core';
import { NewsStory } from '../newsStory.model';
import { Router } from '@angular/router';
import { NewsStoryService } from '../news-story.service';
@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [NewsStoryService]
})
export class NewsListComponent implements OnInit {
  filterByCategory: string ="allStories";
  // @Input() childNewsStoryList: NewsStory[];
  // @Output() clickSender = new EventEmitter();
constructor(private router: Router, private newsStoryService: NewsStoryService) { }
newsStories: NewsStory[];
  // onChange(optionFromMenu){
  //   this.filterByCategory = optionFromMenu;
  // }
  ngOnInit(){
    this.newsStories = this.newsStoryService.getNewsStories();
  }

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
