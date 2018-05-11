import { Component, Input, OnInit } from '@angular/core';
import { NewsStory } from '../newsStory.model';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  @Input() selectedNewsStory;
  constructor() { }

  ngOnInit() {
  }

}
