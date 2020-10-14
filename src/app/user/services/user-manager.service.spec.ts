import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { UserManagerService } from './user-manager.service';

describe('UserManagerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: UserManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
    service = TestBed.inject(UserManagerService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the person', () => {
    expect(service.getPerson.length).toBe(0);
  });
});
