import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'Vecolo';
  isMobileMenuHide = true;
  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu(): void {
    console.log(this.isMobileMenuHide);
    this.isMobileMenuHide = !this.isMobileMenuHide;
  }
}
