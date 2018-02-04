import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { Location } from '@angular/common';
import { MaterialModule } from 'app/common/external/material';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ConstructionComponent } from './under-construction-page.component';

class MockComponent {}

describe('ConstructionComponent', () => {
    let component: ConstructionComponent;
    let fixture: ComponentFixture<ConstructionComponent>;

    let location: Location;
    let router: Router;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
            MaterialModule,
            RouterTestingModule.withRoutes([
                { path: 'construction', component: MockComponent }
            ])
        ],
        declarations: [
            ConstructionComponent
        ]
      }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConstructionComponent);
        component = fixture.componentInstance;

        router = TestBed.get(Router);
        location = TestBed.get(Location);
    });

    it('should create', async(() => {
        expect(component).toBeTruthy();
    }));

    it('should get current route', fakeAsync(() => {
        router.navigate(['construction']);
        tick();
        expect(location.path()).toBe('/construction');
    }));

    describe ('.message', () => {
        it('should render message in an h1 tag', async(() => {
            fixture.detectChanges();
            const compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('Under Construction');
        }));
    });
});
