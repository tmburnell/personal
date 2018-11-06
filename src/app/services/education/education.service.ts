import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Experiences} from 'app/models';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  constructor(private http: HttpClient) {
  }

  getEducation(): Observable<Experiences> {
    return this.http.get('/api/v1/education').pipe(map((res: Experiences) => res));
  }

  getMockEducation(): Observable<Experiences> {
    return this.http.get('https://tmburnell.github.io/personal/app/services/education/mocks/education.data.json').pipe(
      map((res: any) => res.education as Experiences));
  }
}
