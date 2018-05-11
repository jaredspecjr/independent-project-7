import { Injectable } from '@angular/core';
import { NewsStory } from './newsStory.model';
import { NEWSSTORIES } from './mock-newsStories';

@Injectable()
export class NewsStoryService {

  constructor() { }
  getNewsStories() {
    return NEWSSTORIES;
  }
}
