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

  addStory(newNewsStory: NewsStory){
    this.newsStories.push(newNewsStory);
  }


  getNewsStoryById(newsStoryId: string) {
    return this.database.object('newsStories/' + newsStoryId);
  }
}
