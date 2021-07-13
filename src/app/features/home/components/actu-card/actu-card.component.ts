import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actu-card',
  templateUrl: './actu-card.component.html',
  styleUrls: ['./actu-card.component.scss'],
})
export class ActuCardComponent implements OnInit {
  @Input()
  publishDate: any;
  @Input()
  lectureTime: number;
  @Input()
  imgUrl: string;
  @Input()
  category: string;
  @Input()
  title: string;
  @Input()
  author: string;
  constructor() {}
  ngOnInit(): void {}
}
