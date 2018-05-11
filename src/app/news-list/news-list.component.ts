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
  newsStories;

constructor(private router: Router, private newsStoryService: NewsStoryService) { }

  goToDetailPage(clickedNewsStory) {
    this.router.navigate(['newsStories', clickedNewsStory.$key]);
  }
  ngOnInit(){
    this.newsStories = this.newsStoryService.getNewsStories();
  }


}
