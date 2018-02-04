import {Component, Input, Output, EventEmitter} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppHeaderComponent} from './app-header.component';

@Component({
    selector: 'app-user-menu',
    template: '<div>user menu</div>'
})
class AppUserMenuComponent {
}

@Component({
    selector: 'app-nav',
    template: '<div>app nav</div>'
})
class AppNavComponent {
    @Input() navConfig;
    @Output() navChange: EventEmitter<any> = new EventEmitter();
}

describe('AppHeaderComponent', () => {
    let component: AppHeaderComponent;
    let fixture: ComponentFixture<AppHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppHeaderComponent,
                AppNavComponent,
                AppUserMenuComponent
            ]
        }).compileComponents();
    }));

    // beforeEach(inject([], (..._) => {
    //     [] = _;
    // }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should open and create', () => {
        expect(component).toBeTruthy();
    });
});

