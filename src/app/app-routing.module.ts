import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ResumePageComponent} from 'app/resume-page';
import {UnderConstructionPageComponent} from 'app/under-construction-page';

const appRoutes: Routes = [
    {path: 'resume', component: ResumePageComponent},
    {path: 'projects', component: UnderConstructionPageComponent},
    {path: 'r-and-d', component: UnderConstructionPageComponent},

    // otherwise redirect to home
    {path: '**', redirectTo: 'resume'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
        // RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}

