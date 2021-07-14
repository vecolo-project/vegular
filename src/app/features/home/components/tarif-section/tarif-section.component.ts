import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarif-section',
  templateUrl: './tarif-section.component.html',
  styleUrls: ['./tarif-section.component.scss'],
})
export class TarifSectionComponent implements OnInit {
  constructor() {}
  cards = [
    {
      title: 'Véco-Free',
      price: 0.0,
      exergue: "Pas de frais mensuel, on paye à l'utilisation !",
      buttonLabel: 'Acheter Véco-Free',
      includes: ['Orci neque eget pellentesque.'],
    },
    {
      title: 'Véco-Plus',
      price: 24.0,
      exergue: 'Le basic pour se déplacer à Paris',
      buttonLabel: 'Acheter Véco-Plus',
      includes: [
        'Orci neque eget pellentesque.',
        'Orci neque eget pellentesque.',
      ],
    },
    {
      title: "Véco-L'eau",
      price: 32.0,
      exergue: 'Pour les aventiriers du périf confirmé',
      buttonLabel: "Acheter Véco-L'eau",
      includes: [
        'Orci neque eget pellentesque.',
        'Orci neque eget pellentesque.',
        'Orci neque eget pellentesque.',
      ],
    },
  ];
  ngOnInit(): void {}
}
