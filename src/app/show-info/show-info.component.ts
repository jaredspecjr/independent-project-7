import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NewsStory } from '../models/newsStory.model';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent {
  @Input() childSelectedNewsStory: NewsStory;
  @Output() clickedDone = new EventEmitter();

  finishedReading() {
    this.clickedDone.emit();
  }

}
