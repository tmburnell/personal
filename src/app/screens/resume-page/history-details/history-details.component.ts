import {Component, Input} from '@angular/core';
import {Experiences} from 'app/models/index';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent {
  @Input() data: Experiences;
  @Input() icon: string;
  @Input() title: string;
  @Input() nullEndDateText: string;
}
