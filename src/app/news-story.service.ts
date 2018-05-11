import { Injectable } from '@angular/core';
import { NewsStory } from './newsStory.model';
import { NEWSSTORIES } from './mock-newsStories';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class NewsStoryService {
newsStories: FirebaseListObservable<any[]>
  constructor(private database: AngularFireDatabase) {
    this.newsStories = database.list('newsStories');
  }
  getNewsStories() {
    return this.newsStories;
  }

  getNewsStoryById(newsStoryId: number) {
    for (let i = 0; i <= NEWSSTORIES.length - 1; i++) {
      if (NEWSSTORIES[i].id === newsStoryId) {
        return NEWSSTORIES[i];
      }
    }
  }
}
