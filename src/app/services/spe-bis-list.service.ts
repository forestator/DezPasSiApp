import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {BisItem} from '../models/BisItem';

@Injectable({
  providedIn: 'root'
})
export class SpeBisListService {

  listeBisItems: BisItem[] = [];
  listeBisSubject = new Subject<BisItem[]>();

  emitBis() {
    this.listeBisSubject.next(this.listeBisItems);
  }

  saveBis() {
    firebase.database().ref('/BisItems').set(this.listeBisItems);
  }

  getBis() {
    firebase.database().ref('/BisItems')
      .on('value', (data: DataSnapshot) => {
          this.listeBisItems = data.val() ? data.val() : [];
          this.emitBis();
        }
      );
  }

  constructor() {
    this.getBis();
  }

  createNewBisList(newBisList: BisItem) {
    this.listeBisItems.push(newBisList);
    this.saveBis();
    this.emitBis();
  }

  unsubscribe() {
    this.listeBisSubject.unsubscribe();
  }
}
