import {Component, Output, EventEmitter, Input, ViewChild, DoCheck, KeyValueDiffers} from '@angular/core';
import {MatTabNav} from '@angular/material';

import {TabConfig} from 'app/models';

@Component({
    selector: 'app-nav',
    templateUrl: 'app-nav.component.html',
    styleUrls: ['app-nav.component.scss']
})
export class AppNavComponent implements DoCheck {
    @Input() navConfig: TabConfig;

    @Output() navChange: EventEmitter<any> = new EventEmitter();

    @ViewChild(MatTabNav)
    public nav: MatTabNav;
    public hideInkBar = false;
    public differ: any;

    constructor(public differs: KeyValueDiffers) {
        this.differ = differs.find({}).create();
    }

    ngDoCheck() {
        const changes = this.differ.diff(this.navConfig);

        if (changes && Number.isInteger(this.navConfig.selectedIndex)) {
            this.hideInkBar = this.navConfig.selectedIndex === -1 ? true : false;
        }
    }

    onNavClick(index: number) {
        this.navChange.emit({index: index});
    }

    isActiveRoute(index: number): boolean {
        return this.navConfig ? index === this.navConfig.selectedIndex : false;
    }
}
