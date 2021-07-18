import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Plan} from 'src/app/shared/models';

@Component({
  selector: 'app-tarif-section',
  templateUrl: './tarif-section.component.html',
  styleUrls: ['./tarif-section.component.scss'],
})
export class TarifSectionComponent implements OnInit, OnChanges {
  @Input()
  planList: Plan[];

  constructor() {
  }

  cards = [];

  ngOnInit(): void {
    this.fillCards();
  }

  ngOnChanges(): void {
    this.fillCards();
  }

  private fillCards(): void {
    if (this.planList.length > 0) {
      this.cards = [
        {
          title: this.planList[0].name,
          price: this.planList[0].price,
          exergue: 'Pas de frais mensuel, on paye à l\'utilisation !',
          buttonLabel: `Acheter ${this.planList[0].name}`,
          includes: [`Coût par minutes ${this.planList[0].costPerMinute}€/min`],
        },
        {
          title: this.planList[1].name,
          price: this.planList[1].price,
          exergue: 'Le basique pour se déplacer à Paris',
          buttonLabel: `Acheter ${this.planList[1].name}`,
          includes: [`${Number(this.planList[1].freeMinutes).toFixed(0)} minutes gratuites`, `Coût par minutes ${this.planList[1].costPerMinute}€/min`],
        },
        {
          title: this.planList[2].name,
          price: this.planList[2].price,
          exergue: 'Pour les aventuriers du périf confirmés',
          buttonLabel: `Acheter ${this.planList[2].name}`,
          includes: [`${Number(this.planList[1].freeMinutes).toFixed(0)} minutes gratuites`, `Coût par minutes ${this.planList[2].costPerMinute}€/min`],
        },
      ];
    }
  }
}
