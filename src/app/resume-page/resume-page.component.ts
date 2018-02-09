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
        let qrData = "",
            capKey;

        Object.entries(this.user).forEach(([key, value]) => {
            if (key == "links") {
                Object.entries(value).forEach(([key, value]) => {
                    if (value && value.url) {
                        capKey = this.capitalize.transform(key, false);
                        qrData += (qrData.length > 0) ? `\n${capKey}: ${value.url}` : `${capKey}: ${value.url}`;
                    }
                });
            } else if (this.shouldDisplayUserDetail({key: key, value: value})) {
                capKey = this.capitalize.transform(key, false);

                qrData += (qrData.length > 0) ? `\n${capKey}: ${value}` : `${capKey}: ${value}`;
            }
        });

        this.qrData = qrData;
    }

    isURL(value: string): boolean {
        const urlReg = new RegExp(/[-a-zA-Z0-9:%_\+.~#//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:_\+.~#?&//=]*)?/);
        return !!(value && value.match(urlReg));
    }

    isEmail(value: string): boolean {
        return !!(value && value.indexOf('@') > -1);
    }

    getSkillLevelQuality(level: number): string {
        return this.skillLevel.filter(skillLevel => {
            return level >= skillLevel.min && level <= skillLevel.max;
        }).map(res => res.name as string)[0];
    }

    getSkillLevel(n:number): Array<any> {
        return this.getArray(Math.floor(n / 10));
    }

    getArray(i:number): Array<any> {
        return new Array(i);
    }
}
