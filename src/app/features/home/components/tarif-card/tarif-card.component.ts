import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif-card',
  templateUrl: './tarif-card.component.html',
  styleUrls: ['./tarif-card.component.scss'],
})
export class TarifCardComponent implements OnInit {
  @Input()
  card: {
    title: string;
    price: number;
    includes: string[];
    exergue: string;
    buttonLabel: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
