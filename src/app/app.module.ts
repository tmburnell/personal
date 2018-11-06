import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {CommonComponents} from 'app/common';
import {Screens} from './screens';
import {ThirdPartyModules} from './thirdPartyModules';


@NgModule({
    declarations: [
        AppComponent,
        CommonComponents,

        Screens
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,

        ThirdPartyModules,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    // constructor(router: Router) {
    //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    // }
}
