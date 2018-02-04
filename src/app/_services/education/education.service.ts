import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Experience} from 'app/_models';

@Injectable()
export class EducationService {
  constructor(private http: HttpClient ) { }

  getEducation(): Observable<Array<Experience>> {
    return this.http.get('/api/v1/education').map(res => res as Array<Experience>);
  }

  getMockEducation(): Observable<Array<Experience>> {
    return this.http.get('app/_services/education/mocks/education.data.json').map((res: any) => res.education as Array<Experience>);
  }
}
