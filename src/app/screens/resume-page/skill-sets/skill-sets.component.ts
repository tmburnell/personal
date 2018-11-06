import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-sets',
  templateUrl: './skill-sets.component.html',
  styleUrls: ['./skill-sets.component.scss']
})
export class SkillSetsComponent {
  @Input() data: any;

  getSkillLevel(n: number): Array<any> {
    return this.getArray(Math.floor(n / 10));
  }

  getArray(i: number): Array<any> {
    return new Array(i);
  }
}
