import { Component, Input, OnInit } from '@angular/core';
import { RouterNavigation } from 'src/app/core/router/router.navigation';

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

  constructor(private router: RouterNavigation) {}

  ngOnInit(): void {}

  gotoProfile(): void {
    this.router.gotoProfile();
  }
}
