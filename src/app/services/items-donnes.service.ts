import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {Item} from './wow-wapi-guild-members.service';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class ItemsDonnesService {

  listeDesItemsDonnes: Item[] = [];
  listeItemDonnesSubject = new Subject<Item[]>();

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

  constructor() {
    this.getItemsDonnes();
  }

  addAssociation(newAssociation: Item) {
    this.listeDesItemsDonnes.push(newAssociation);
    this.saveItemsDonnes();
    this.emitItemsDonnes();
  }

  removeStats(newItem: Item) {
    const itemIndexToRemove = this.listeDesItemsDonnes.findIndex(
      (itemToDelete) => {
        if (itemToDelete === newItem) {
          return true;
        }
      }
    );
    this.listeDesItemsDonnes.splice(itemIndexToRemove, 1);
    this.saveItemsDonnes();
    this.emitItemsDonnes();
  }

  unsubscribe() {
    this.listeItemDonnesSubject.unsubscribe();
  }


}
