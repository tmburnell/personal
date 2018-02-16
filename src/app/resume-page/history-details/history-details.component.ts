import {Component, Input} from '@angular/core';
import {Experience} from "app/_models";

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent {
  @Input() data: Array<Experience>;
  @Input() icon: string;
  @Input() title: string;
  @Input() nullEndDateText: string;
}
