import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {TabConfig, User} from 'app/_models';
import {UserService} from 'app/_services';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() navConfig: TabConfig;
  @Output() navChange: EventEmitter<any> = new EventEmitter();

  public user: User;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe((user)=>{
      this.user=user;
    }, err => {
      this.userService.getMockUser().subscribe((user) => {
        this.user = user;
      });
    });
  }

  printPage() {
    window.print();
  }
}
