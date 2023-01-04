import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AuthResponse } from '../interfaces';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { userFake } from '../mock/user-register-form.mock';
import { authResponse } from '../mock/user-auth-response.mock';
import { loginForm } from '../mock/login-form.mock';

describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
    });
    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should return succes login and user responce', (done: DoneFn) => {
    authService.login(loginForm).subscribe((resp: AuthResponse) => {
      expect(resp).toEqual(authResponse);
      done();
    });
    const req = httpTestingController.expectOne(
      `${environment.BASE_URL}/auth/login`
    );
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  it('should register user return authResponse', (done: DoneFn) => {
    authService.register(userFake).subscribe((authResponse: AuthResponse) => {
      expect(authResponse).toEqual(authResponse);
      expect(authResponse.token).toBeTruthy();
      done();
    });
    const req = httpTestingController.expectOne(
      `${environment.BASE_URL}/auth/register`
    );
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});

// const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
// httpClientSpy.post.and.returnValue(of(authResponse));

// authService = new AuthService(httpClientSpy);
