import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.scss'],
})
export class TarifCardComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  exergue: string;
  @Input()
  buttonLabel: string;
  @Input()
  price: number;
  @Input()
  includes: string[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.title);
  }
}
