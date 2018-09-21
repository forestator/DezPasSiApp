import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

export interface Spec {
  name: string;
  role: string;
  backgroundImage: string;
  icon: string;
  description: string;
  order: number;
}

export class Item {

  constructor(characterName: string, idItem: number, name: string, bonus:string) {
    this.characterName = characterName;
    this.idItem = idItem;
    this.name = name;
    this.bonus = bonus;
  }

  characterName: string;
  idItem: number;
  name: string;
  bonus: string
}

export interface Character {
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  spec: Spec;
  guild: string;
  guildRealm: string;
  lastModified: number;
  itemsDonnesEnRaid: Item[];
}

export interface Member {
  character: Character;
  rank: number;
}

export interface Emblem {
  icon: number;
  iconColor: string;
  iconColorId: number;
  border: number;
  borderColor: string;
  borderColorId: number;
  backgroundColor: string;
  backgroundColorId: number;
}

export interface RootObject {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  level: number;
  side: number;
  achievementPoints: number;
  members: Member[];
  emblem: Emblem;
}

@Injectable({
  providedIn: 'root'
})
export class WowWapiGuildMembersService {

  constructor(private http:HttpClient) { }

  configUrl = 'https://eu.api.battle.net/wow/guild/Archimonde/Dez%20pas%20si%20t%C3%B4t?fields=members&locale=fr_FR&apikey=nvr9d4r4suamg52mvstz5a853u593424';

  getMembers() {
    return this.http.get<RootObject>(this.configUrl)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
