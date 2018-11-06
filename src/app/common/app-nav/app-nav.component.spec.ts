import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material';

import {TabConfig} from 'app/models';

import {AppNavComponent} from './app-nav.component';

describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        NoopAnimationsModule
      ],
      declarations: [
        AppNavComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;

    component.navConfig = {
      selectedIndex: 0,
      tabNav: [
        {name: 'page1', route: '/page1'},
        {name: 'page2', route: '/page2'},
        {name: 'page3', route: '/page3'}
      ]
    } as TabConfig;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on Nav Click, fire NavChange event', () => {
    let navChangeEmited = jasmine.createSpy('navchange Emit'),
      index = 1;

    spyOn(component.navChange, 'emit').and.callFake((val) => {
      expect(val).toEqual({index: index});
      navChangeEmited();
    });

    component.onNavClick(index);
    expect(navChangeEmited).toHaveBeenCalled();
  });

  it('on SelectedIndex change, the ink bar should reflect the selection', () => {
    component.navConfig.selectedIndex = 1;
    fixture.detectChanges();
    expect(component.hideInkBar).toBe(false);


    component.navConfig.selectedIndex = -1;
    fixture.detectChanges();
    expect(component.hideInkBar).toBe(true);


    component.navConfig.selectedIndex = 0;
    fixture.detectChanges();
    expect(component.hideInkBar).toBe(false);
  });
});
