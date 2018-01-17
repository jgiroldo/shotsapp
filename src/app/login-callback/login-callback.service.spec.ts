import { TestBed, inject } from '@angular/core/testing';

import { LoginCallbackService } from './login-callback.service';

describe('LoginCallbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginCallbackService]
    });
  });

  it('should be created', inject([LoginCallbackService], (service: LoginCallbackService) => {
    expect(service).toBeTruthy();
  }));
});
