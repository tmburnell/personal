import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-construction',
    templateUrl: 'under-construction-page.component.html',
    styleUrls: ['under-construction-page.component.scss']
})

export class UnderConstructionPageComponent implements OnInit {
    public currentRoute: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        if (this.router.url) {
            this.currentRoute = this.router.url.substring(1, this.router.url.length);
        }
    }
}
