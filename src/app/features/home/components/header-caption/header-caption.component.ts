import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-caption',
  templateUrl: './header-caption.component.html',
  styleUrls: ['./header-caption.component.scss'],
})
export class HeaderCaptionComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  exergue: string;

  constructor() {}

  ngOnInit(): void {}
}
