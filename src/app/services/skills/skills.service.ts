import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SkillSets} from 'app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private http: HttpClient) {
  }

  getSkills(): Observable<SkillSets> {
    return this.http.get('/api/v1/skills').pipe(map((res: SkillSets) => res as SkillSets));
  }

  getMockSkills(): Observable<SkillSets> {
    return this.http.get('https://tmburnell.github.io/personal/app/services/skills/mocks/skills.data.json').pipe(
      map((res: any) => res.skills as SkillSets));
  }
}
