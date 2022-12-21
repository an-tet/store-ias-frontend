import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthService);
  });
  // beforeEach(() => {

  // });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
