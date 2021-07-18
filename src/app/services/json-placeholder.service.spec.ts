/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonPlaceholderService } from './json-placeholder.service';

describe('Service: JsonPlaceholder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceholderService]
    });
  });

  it('should ...', inject([JsonPlaceholderService], (service: JsonPlaceholderService) => {
    expect(service).toBeTruthy();
  }));
});
