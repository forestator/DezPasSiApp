import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import * as firebase from 'firebase';
import {Item} from './wow-wapi-guild-members.service';
import DataSnapshot = firebase.database.DataSnapshot;
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemsDonnesService {

  listeDesItemsDonnes: Item[] = [];
  listeItemDonnesSubject = new Subject<Item[]>();
  db: AngularFirestore;

  emitItemsDonnes() {
    this.listeItemDonnesSubject.next(this.listeDesItemsDonnes);
  }

  saveItemsDonnes() {
    firebase.database().ref('/itemsDonnes').set(this.listeDesItemsDonnes);
  }

  getItemsDonnes() {
    firebase.database().ref('/itemsDonnes')
      .on('value', (data: DataSnapshot) => {
          this.listeDesItemsDonnes = data.val() ? data.val() : [];
          this.emitItemsDonnes();
        }
      );
  }

  constructor(db: AngularFirestore) {
    this.getItemsDonnes();
    this.db = db;
  }

  addAssociation(newAssociation: Item) {
    this.listeDesItemsDonnes.push(newAssociation);
    this.saveItemsDonnes();
    this.emitItemsDonnes();
  }

  getItemByCharacterName(charName: string){
    var charItems: Item[];
    for (let item of this.listeDesItemsDonnes){
      if (charName == item.characterName){
        charItems.push(item);
      }
    }
    return charItems;
  }

  unsubscribe() {
    this.listeItemDonnesSubject.unsubscribe();
  }


}
