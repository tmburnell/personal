import {Component, OnInit} from '@angular/core';

import {EducationService, SkillsService, UserService, WorkHistoryService} from "app/_services";
import {User, SkillSet, Skill, Experience} from 'app/_models';

import {CapitalizePipe} from 'app/common';

@Component({
    selector: 'app-resume-page',
    templateUrl: './resume-page.component.html',
    styleUrls: ['./resume-page.component.scss'],
    providers: [CapitalizePipe]
})
export class ResumePageComponent implements OnInit {
    education: Array<Experience>;
    skillSets: Array<SkillSet>;
    user: User;
    workHistory: Array<Experience>;
    qrData: string;

    validDisplays = {
        "name": true,
        "title": false,
        "avatar": false,
        "dob": true,
        "address": true,
        "phone": true,
        "blurb": false
    };

    skillLevel = [
        {name: "novice", min: 0, max: 39},
        {name: "competent", min: 40, max: 69},
        {name: "professional", min: 70, max: 100}
    ];

    constructor(private educationSerice: EducationService,
                private skillService: SkillsService,
                private userService: UserService,
                private workHistoryService: WorkHistoryService,
                private capitalize: CapitalizePipe) {
    }

    ngOnInit() {
        this.userService.getUser().subscribe((user) => {
            this.user = user;
            this.updateQrData();
        }, err => {
            this.userService.getMockUser().subscribe((user) => {
                this.user = user;
                this.updateQrData();
            });
        });

        this.skillService.getSkills().subscribe((skillSets) => {
            this.skillSets = this.sortSkillSet(skillSets);
        }, err => {
            this.skillService.getMockSkills().subscribe((skillSets) => {
                this.skillSets = this.sortSkillSet(skillSets);
            });
        });

        this.educationSerice.getEducation().subscribe((education) => {
            this.education = education;
        }, err => {
            this.educationSerice.getMockEducation().subscribe((education) => {
                this.education = education;
            });
        });

        this.workHistoryService.getWorkHistory().subscribe((wh) => {
            this.workHistory = wh;
        }, err => {
            this.workHistoryService.getMockWorkHistory().subscribe((wh) => {
                this.workHistory = wh;
            });
        });
    }

    sortSkillSet(ss: Array<SkillSet>): Array<SkillSet> {
        let tempSkillSet: SkillSet;
        return ss.map((obj: SkillSet): SkillSet => {
            tempSkillSet = new SkillSet({
                title: obj.title,
                skills: obj.skills.sort((a: Skill, b: Skill) => {
                    return (a.level < b.level) ? 1 : (a.level > b.level) ? -1 : 0;
                })
            });

            return tempSkillSet;
        });
    }

    shouldDisplayUserDetail(detail): boolean {
        return this.validDisplays[detail.key] && detail.value;
    }

    updateQrData() {
        this.qrData = document.location.href;
    }
}
