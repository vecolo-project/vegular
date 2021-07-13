import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavComponent implements OnInit {
  constructor() {}
  @Input()
  currentPage: string;

  @Output()
  changeCurrentPage = new EventEmitter<string>();

  ngOnInit(): void {}

  changePage(nextPage: string): void {
    this.changeCurrentPage.emit(nextPage);
  }
}
