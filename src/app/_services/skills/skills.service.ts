import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {SkillSet} from "app/_models/skill";

@Injectable()
export class SkillsService {
  constructor(private http: HttpClient ) { }

  getSkills(): Observable<Array<SkillSet>> {
    return this.http.get('/api/v1/skills').map(res => res as Array<SkillSet>);
  }

  getMockSkills(): Observable<Array<SkillSet>> {
    return this.http.get('app/_services/skills/mocks/skills.data.json').map((res:any) => res.skills as Array<SkillSet>);
  }
}
