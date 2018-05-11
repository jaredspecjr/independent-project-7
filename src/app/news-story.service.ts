import { Injectable } from '@angular/core';
import { NewsStory } from './newsStory.model';
import { NEWSSTORIES } from './mock-newsStories';

@Injectable()
export class NewsStoryService {

  constructor() { }
  getNewsStories() {
    return NEWSSTORIES;
  }

  getNewsStoryById(newsStoryId: number) {
    for (let i = 0; i <= NEWSSTORIES.length - 1; i++) {
      if (NEWSSTORIES[i].id === newsStoryId) {
        return NEWSSTORIES[i];
      }
    }
  }
}
