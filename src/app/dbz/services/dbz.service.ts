import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _characters: Character[] = [
    { name: 'Goku', power: 15000 },
    { name: 'Vegeta', power: 8500 },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  constructor() {}

  addCharacter(character: Character) {
    if (character.name.trim().length === 0) {
      return;
    }
    this._characters.push(character);
  }
}
