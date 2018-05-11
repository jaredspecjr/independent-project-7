import { Component, OnInit} from '@angular/core';
import { NewsStory } from '../newsStory.model';
import { NewsStoryService } from '../news-story.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [NewsStoryService]
})
export class CommentsComponent {
  newsStoryId: string;
  newsStoryToDisplay;
  constructor(private newsStoryService: NewsStoryService, private route: ActivatedRoute, private location: Location) { }
  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      this.newsStoryId = urlParameters['id'];
    });
    this.newsStoryService.getNewsStoryById(this.newsStoryId).subscribe(dataLastEmittedFromObserver => {
      this.newsStoryToDisplay = dataLastEmittedFromObserver;
    })
  }
  submitComment(newsStoryId, newCommentSection){
    this.newsStoryService.addComment(newsStoryId, newCommentSection);
  }
}
