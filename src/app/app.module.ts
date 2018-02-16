import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from '@angular/flex-layout';
import {QRCodeModule} from 'angularx-qrcode';

import {MatTabsModule, MatSliderModule, MatButtonModule, MatMenuModule} from "@angular/material";
const MaterialModules = [
    MatTabsModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule
];

import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome'

import {AppComponent} from './app.component';
import {UnderConstructionPageComponent} from './under-construction-page'

import {ResumePageComponent, SkillSetsComponent} from './resume-page';
const ResumePage = [
  ResumePageComponent,
  SkillSetsComponent
];

import {EducationService, SkillsService, UserService, WorkHistoryService} from 'app/_services';
const Services = [
    EducationService,
    SkillsService,
    UserService,
    WorkHistoryService
];

import {AppRoutingModule} from "./app-routing.module";
import {AppHeaderComponent, AppNavComponent, KeysPipe, CapitalizePipe} from 'app/common';
const CommonComponents = [
    AppHeaderComponent,
    AppNavComponent,
    KeysPipe,
    CapitalizePipe
];


@NgModule({
    declarations: [
        AppComponent,
        CommonComponents,

        ResumePage,
        UnderConstructionPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,

        FlexLayoutModule,
        Angular2FontawesomeModule,
        QRCodeModule,

        // Material
        MaterialModules
    ],
    providers: [
        Services
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
    // constructor(router: Router) {
    //     console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    // }
}
