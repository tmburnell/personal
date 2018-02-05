import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {User} from "app/_models/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient ) { }

  getUser(): Observable<User> {
    return this.http.get('/api/v1/user').map(user => user as User);
  }

  getMockUser(): Observable<User> {
    return this.http.get('https://cdn.rawgit.com/tmburnell/personal/gh-pages/app/_services/user/mocks/user.data.json')
        .map((res:any) => res.user as User);
  }
}
