import {  HttpClient, HttpClientModule, HttpHandler,  } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DetailsService } from './details.service';

describe('DetailsService', () => {
  let service: DetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HttpClient, HttpHandler] });
    service = TestBed.inject(DetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
