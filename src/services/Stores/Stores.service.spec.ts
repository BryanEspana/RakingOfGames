/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoresService } from './Stores.service';

describe('Service: Stores', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoresService]
    });
  });

  it('should ...', inject([StoresService], (service: StoresService) => {
    expect(service).toBeTruthy();
  }));
});
