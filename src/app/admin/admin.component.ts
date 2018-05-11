import { Component, OnInit } from '@angular/core';
import { NewsStory } from '../newsStory.model';
import { NewsStoryService } from '../news-story.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [NewsStoryService]
})
export class AdminComponent implements OnInit {

  constructor(private newsStoryService: NewsStory) { }

  ngOnInit() {
  }
  submitForm(title: string, author: string, info1: string, fullStory: string, category: number, commentSection: string){
    let newNewsStory: NewsStory = new NewsStory(title, author, info1, fullStory, category, commentSection);
    this.newsStoryService.addStory(newNewsStory);
  }

}
