import { Component, Input /* EventEmitter,  Output  */ } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input()
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  addCharacter(): void {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    //this.characters.push(this.newCharacter);
    //this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
