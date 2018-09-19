import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '../../../node_modules/@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {throwError} from 'rxjs';

export interface RootObject {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  calcClass: string;
  faction: number;
  items: Items;
  totalHonorableKills: number;
}

export interface Items {
  averageItemLevel: number;
  averageItemLevelEquipped: number;
  /*
  head: Head;
  neck: Neck;
  shoulder: Shoulder;
  back: Back;
  chest: Chest;
  tabard: Tabard;
  wrist: Wrist;
  hands: Hands;
  waist: Waist;
  legs: Legs;
  feet: Feet;
  finger1: Finger1;
  finger2: Finger2;
  trinket1: Trinket1;
  trinket2: Trinket2;
  mainHand: MainHand;
*/
}

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  constructor(private http:HttpClient) { }

  private relativeUrl: string;

  getMember(memberName: string) {
    this.relativeUrl = "https://eu.api.battle.net/wow/character/Archimonde/"+memberName+"?fields=items&locale=fr_FR&apikey=nvr9d4r4suamg52mvstz5a853u593424";
    return this.http.get<RootObject>(this.relativeUrl)
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
