import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const menuDesktop = document.querySelector('.menu');
    const menuDesktopRect = menuDesktop.getBoundingClientRect();
    const menuDesktopItem = document.querySelectorAll('.menu__item');
    const menuPill: HTMLElement = document.querySelector('.menu__pill');
    const menuToggle = document.querySelector('.menu__toggle');
    const menuDesktopItems = document.querySelector('.menu__items');

    function removeClassToAll(items: NodeListOf<Element>, className: string) {
      items.forEach((item) => item.classList.remove(className));
    }

    menuDesktopItem.forEach((item) => {
      const rect = item.getBoundingClientRect();
      item.addEventListener('mouseenter', (e) => {
        menuPill.style.left =
          String((rect.left - menuDesktopRect.left + 7) * 0.94) + 'px';
        menuPill.style.width = String(rect.width - 40) + 'px';
        removeClassToAll(menuDesktopItem, 'menu__item--active');
        item.classList.add('menu__item--active');
      });
    });

    menuToggle.addEventListener('click', (e) => {
      menuDesktopItems.classList.toggle('menu__mobile-isdisplay');
    });
  }
}
