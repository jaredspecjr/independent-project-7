import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NewsStory } from '../newsStory.model';
import { NewsStoryService } from '../news-story.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [NewsStoryService]
})
export class ItemDetailComponent implements OnInit {
  newsStoryId: number;
  newsStoryToDisplay: NewsStory;
  constructor(private route: ActivatedRoute, private location: Location, private newsStoryService: NewsStoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.newsStoryId = parseInt(urlParameters['id']);
    });
    this.newsStoryToDisplay = this.newsStoryService.getNewsStoryById(this.newsStoryId);
  }

}
