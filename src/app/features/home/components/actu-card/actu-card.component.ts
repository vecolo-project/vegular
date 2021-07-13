import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actu-card',
  templateUrl: './actu-card.component.html',
  styleUrls: ['./actu-card.component.scss'],
})
export class ActuCardComponent implements OnInit {
  @Input()
  card: {
    title: string;
    publishDate: string;
    imgUrl: string;
    category: string;
    author: string;
    lectureTime: number;
    profileUrl: string;
  };
  constructor() {}
  ngOnInit(): void {}
}
