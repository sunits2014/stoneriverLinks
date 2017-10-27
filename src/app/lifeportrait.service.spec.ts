import { TestBed, inject } from '@angular/core/testing';

import { LifeportraitService } from './lifeportrait.service';

describe('LifeportraitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeportraitService]
    });
  });

  it('should be created', inject([LifeportraitService], (service: LifeportraitService) => {
    expect(service).toBeTruthy();
  }));
});
