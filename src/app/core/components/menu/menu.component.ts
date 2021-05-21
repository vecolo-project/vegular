import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  title = 'Vecolo';
  isMobileMenuShow = false;
  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu(): void {
    this.isMobileMenuShow = !this.isMobileMenuShow;
  }
}
