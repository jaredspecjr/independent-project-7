import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsStory } from '../models/newsStory.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() childSelectedNewsStory: NewsStory;
  @Output() clickedComment = new EventEmitter();

  finishedCommenting() {
    this.clickedComment.emit();
  }
}
