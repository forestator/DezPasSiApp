import { Injectable } from '@angular/core';
import {PoidsDesStats} from '../models/PDS';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {BisItem} from '../models/BisItem';

@Injectable({
  providedIn: 'root'
})
export class SpeBisListService {

  selectedSpe: string = 'Armes';
  listeBisItems: BisItem[] = [];
  listeBisSubject = new Subject<BisItem[]>();

  emitBis() {
    this.listeBisSubject.next(this.listeBisItems);
  }

  saveBis() {
    firebase.database().ref('/BisItems/'+this.selectedSpe).set(this.listeBisItems);
  }

  getBis() {
    firebase.database().ref('/BisItems/'+this.selectedSpe)
      .on('value', (data: DataSnapshot) => {
          this.listeBisItems = data.val() ? data.val() : [];
          this.emitBis();
        }
      );
  }

  setSelectedSpe(newSpe: string){
    this.selectedSpe = newSpe;
    this.getBis();
    this.emitBis();
  }

  constructor() {
    this.getBis();
  }

  createNewBisList(newBisList: BisItem) {
    if(this.selectedSpe != newBisList.spe)
    {
      this.selectedSpe = newBisList.spe;
      this.listeBisItems = [];
    }
    this.listeBisItems.push(newBisList);
    this.saveBis();
    this.emitBis();
  }

  unsubscribe() {
    this.listeBisSubject.unsubscribe();
  }

  emitBisNewSpe(currentSpe: string) {
    console.log("coucou"+currentSpe);
    this.selectedSpe = currentSpe;
    this.getBis();
    this.emitBis();
  }
}
