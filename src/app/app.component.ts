import {Component, OnInit} from '@angular/core';
import {Router, ResolveStart} from '@angular/router';


import {TabConfig} from 'app/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public navConfig: TabConfig = {
    selectedIndex: 0,
    tabNav: [
      {name: 'Resume', route: '/resume'},
      {name: 'Projects', route: '/projects'},
      {name: 'R & D', route: '/r-and-d'}
    ]
  } as TabConfig;
  public showHeader = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    // Update nav selection to match current route.
    this.router.events.subscribe((route) => {
      if (route instanceof ResolveStart) {
        this.showHeader = this.shouldShowHeader(route.url);

        if (this.showHeader) {
          this.navConfig.selectedIndex = this.findNewNavIndex(route.url, this.navConfig.tabNav);
        }
      }
    });
  }

  shouldShowHeader(url: string): boolean {
    return !this.isSupportPage(url);
  }

  isSupportPage(url: string) {
    return url === '/login' || url === '/sessionExpired';
  }

  findNewNavIndex(url: string, navList): number {
    return this.getRouteIndex(this.findRootURL(url), navList);
  }

  findRootURL(url: string): string {
    let rootURL: string;

    // TODO: regex check url to select different tabs.
    rootURL = url;

    return rootURL;
  }

  getRouteIndex(url: string, navList): number {
    return navList.findIndex((nav) => nav.route === url);
  }

  onNavChange($event) {
    if ($event.index !== this.navConfig.selectedIndex) {
      this.router.navigate([this.navConfig.tabNav[$event.index].route]);
    }
  }

}
