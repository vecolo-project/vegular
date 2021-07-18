import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Plan } from 'src/app/shared/models';

@Component({
  selector: 'app-tarif-section',
  templateUrl: './tarif-section.component.html',
  styleUrls: ['./tarif-section.component.scss'],
})
export class TarifSectionComponent implements OnInit, OnChanges {
  @Input()
  planList: Plan[];

  constructor() {}
  cards = [];
  ngOnInit(): void {
    this.cards = [
      {
        title: 'Véco-Free',
        price: 0.0,
        exergue: "Pas de frais mensuel, on paye à l'utilisation !",
        buttonLabel: 'Acheter Véco-Free',
        includes: ['cout par minutes 0.15'],
      },
      {
        title: 'Véco-Plus',
        price: 10.0,
        exergue: 'Le basic pour se déplacer à Paris',
        buttonLabel: 'Acheter Véco-Plus',
        includes: ['10 minutes gratuites', 'coût par minutes 0.07'],
      },
      {
        title: "Véco-L'eau",
        price: 25.0,
        exergue: 'Pour les aventiriers du périf confirmé',
        buttonLabel: "Acheter Véco-L'eau",
        includes: ['40 minutes gratuites', 'coût par minutes 0.07'],
      },
    ];
  }
  ngOnChanges(): void {
    if (this.planList.length > 0) {
      this.cards = [
        {
          title: this.planList[0].name,
          price: this.planList[0].price,
          exergue: "Pas de frais mensuel, on paye à l'utilisation !",
          buttonLabel: `Acheter ${this.planList[0].name}`,
          includes: ['cout par minutes 0.15'],
        },
        {
          title: this.planList[1].name,
          price: this.planList[1].price,
          exergue: 'Le basic pour se déplacer à Paris',
          buttonLabel: `Acheter ${this.planList[1].name}`,
          includes: ['10 minutes gratuites', 'coût par minutes 0.07'],
        },
        {
          title: this.planList[2].name,
          price: this.planList[2].price,
          exergue: 'Pour les aventuriers du périf confirmé',
          buttonLabel: `Acheter ${this.planList[2].name}`,
          includes: ['40 minutes gratuites', 'coût par minutes 0.07'],
        },
      ];
    }
  }
}
