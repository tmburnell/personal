import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSetsComponent } from './skill-sets.component';

describe('SkillSetsComponent', () => {
  let component: SkillSetsComponent;
  let fixture: ComponentFixture<SkillSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
