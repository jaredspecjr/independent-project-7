import { TestBed, inject } from '@angular/core/testing';

import { NewsStoryService } from './news-story.service';

describe('NewsStoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsStoryService]
    });
  });

  it('should be created', inject([NewsStoryService], (service: NewsStoryService) => {
    expect(service).toBeTruthy();
  }));
});
