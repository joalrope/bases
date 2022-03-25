import { Component, EventEmitter } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component( {
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
} )
export class MainPageComponent {

  //characters: Character[] = [];

  newCharacter: Character = {
    name: 'Maestro Roshi',
    power: 1000,
  };

  /*get characters (): Character[] {
    return this.dbzService.characters;
  }*/

  /*addNewCharacter ( characterLoaded: Character ) {
    this.characters.push( characterLoaded );
  }*/



  constructor ( private dbzService: DbzService ) {
    //this.characters = this.dbzService.characters;
  }
}
