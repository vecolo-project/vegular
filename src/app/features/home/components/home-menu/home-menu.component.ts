import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  constructor() {}

  @Output()
  goToContact = new EventEmitter<void>();

  @Output()
  goToActu = new EventEmitter<void>();

  @Output()
  goToPresentation = new EventEmitter<void>();

  @Output()
  goToTarif = new EventEmitter<void>();

  menuDesktopItem: Element[];

  menuPill: HTMLElement;

  EXTRA_PADDING = 30;
  presentationMenu: Element;
  actuMenu: Element;
  tarifMenu: Element;
  contactMenu: Element;

  gotoPresentaitonMenu(): void {
    const width = this.presentationMenu.getBoundingClientRect().width;
    this.removeClassToAll(this.menuDesktopItem, 'menu__item--active');
    this.presentationMenu.classList.add('menu__item--active');
    this.menuPill.style.left = '10px';
    this.menuPill.style.width = String(width - this.EXTRA_PADDING) + 'px';
  }

  gotoActuMenu(): void {
    const width = this.actuMenu.getBoundingClientRect().width;
    this.removeClassToAll(this.menuDesktopItem, 'menu__item--active');
    this.actuMenu.classList.add('menu__item--active');
    this.menuPill.style.left = '185px';
    this.menuPill.style.width = String(width - this.EXTRA_PADDING) + 'px';
  }

  gotoTarifMenu(): void {
    const width = this.tarifMenu.getBoundingClientRect().width;
    this.removeClassToAll(this.menuDesktopItem, 'menu__item--active');
    this.tarifMenu.classList.add('menu__item--active');
    this.menuPill.style.left = '335px';
    this.menuPill.style.width = String(width - this.EXTRA_PADDING) + 'px';
  }

  gotoContactMenu(): void {
    const width = this.contactMenu.getBoundingClientRect().width;
    this.removeClassToAll(this.menuDesktopItem, 'menu__item--active');
    this.contactMenu.classList.add('menu__item--active');
    this.menuPill.style.left = '445px';
    this.menuPill.style.width = String(width - this.EXTRA_PADDING) + 'px';
  }

  ngOnInit(): void {
    this.menuDesktopItem = Array.from(document.querySelectorAll('.menu__item'));
    this.menuPill = document.querySelector('.menu__pill');

    this.presentationMenu = document.querySelector('#presentation-menu');
    this.actuMenu = document.querySelector('#actu-menu');
    this.tarifMenu = document.querySelector('#tarif-menu');
    this.contactMenu = document.querySelector('#contact-menu');

    this.presentationMenu.addEventListener('mouseenter', () =>
      this.gotoPresentaitonMenu()
    );
    this.actuMenu.addEventListener('mouseenter', () => this.gotoActuMenu());
    this.tarifMenu.addEventListener('mouseenter', () => this.gotoTarifMenu());
    this.contactMenu.addEventListener('mouseenter', () =>
      this.gotoContactMenu()
    );

    const sections = [
      {
        id: '#presentation',
        func: () => this.gotoPresentaitonMenu(),
      },
      {
        id: '#actu',
        func: () => this.gotoActuMenu(),
      },
      {
        id: '#tarif',
        func: () => this.gotoTarifMenu(),
      },
      {
        id: '#contact',
        func: () => this.gotoContactMenu(),
      },
    ];
    sections.forEach((section) => {
      const target = document.querySelector(section.id);
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          section.func();
        }
      });
      observer.observe(target);
    });
  }

  private removeClassToAll(items: Array<Element>, className: string) {
    items.forEach((item) => item.classList.remove(className));
  }
}
