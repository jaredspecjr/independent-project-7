import { Component, Input, OnInit } from '@angular/core';
import { NewsStory } from '../newsStory.model';
import { NewsStoryService } from '../news-story.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css'],
  providers: [NewsStoryService]
})
export class EditStoryComponent implements OnInit {
  @Input() selectedNewsStory;
  constructor(private newsStoryService: NewsStoryService) { }

  ngOnInit() {
  }

  beginUpdatingNewsStory(newsStoryToUpdate){
    this.newsStoryService.updateNewsStory(newsStoryToUpdate);
  }

}
