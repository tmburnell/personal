import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {User} from 'app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUser(): Observable<User> {
    return this.http.get('/api/v1/user').pipe(map((user: User) => user));
  }

  getMockUser(): Observable<User> {
    return this.http.get('/app/services/user/mocks/user.data.json').pipe(
      map((res: any) => res.user as User));
  }
}
