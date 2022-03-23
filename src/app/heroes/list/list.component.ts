import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  lastHeroDelete: string = '';
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Cápitan América',
    'Superman',
  ];

  heroDelete() {
    this.lastHeroDelete = this.heroes.pop() || '';
  }
}
