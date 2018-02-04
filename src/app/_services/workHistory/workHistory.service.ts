import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Experience} from "app/_models";

@Injectable()
export class WorkHistoryService {
  constructor(private http: HttpClient ) { }

  getWorkHistory(): Observable<Array<Experience>> {
    return this.http.get('/api/v1/work-history').map(exp => exp as Array<Experience>);
  }

  getMockWorkHistory(): Observable<Array<Experience>> {
    return this.http.get('app/_services/workHistory/mocks/workHistory.data.json').map((res:any) => res.workHistory as Array<Experience>);
  }
}
