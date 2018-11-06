import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Experiences} from 'app/models';

@Injectable({
  providedIn: 'root'
})
export class WorkHistoryService {
  constructor(private http: HttpClient) {
  }

  getWorkHistory(): Observable<Experiences> {
    return this.http.get('/api/v1/work-history').pipe(map((exps: Experiences) => exps));
  }

  getMockWorkHistory(): Observable<Experiences> {
    return this.http.get('https://tmburnell.github.io/personal/app/services/workHistory/mocks/workHistory.data.json').pipe(
      map((res: any) => res.workHistory as Experiences)
    );
  }
}
