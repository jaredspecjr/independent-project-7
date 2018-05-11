import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NewsStory } from '../newsStory.model';
import { NewsStoryService } from '../news-story.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [NewsStoryService]
})
export class ItemDetailComponent implements OnInit {
  newsStoryId: string;
  newsStoryToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private newsStoryService: NewsStoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.newsStoryId = urlParameters['id'];
    });
    // this.newsStoryToDisplay = this.newsStoryService.getNewsStoryById(this.newsStoryId);
  }

}
