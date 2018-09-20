import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {PoidsDesStats} from '../models/PDS';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  listeStats: PoidsDesStats[] = [];
  statsSubject = new Subject<PoidsDesStats[]>();

  emitStats() {
    this.statsSubject.next(this.listeStats);
  }

  saveStats() {
    firebase.database().ref('/stats').set(this.listeStats);
  }

  getStats() {
    firebase.database().ref('/stats')
      .on('value', (data: DataSnapshot) => {
          this.listeStats = data.val() ? data.val() : [];
          this.emitStats();
        }
      );
  }

  constructor() {
    this.getStats();
  }

  createNewStats(newStats: PoidsDesStats) {
    this.listeStats.push(newStats);
    this.saveStats();
    this.emitStats();
  }

  editStats(statsToEdit: PoidsDesStats){
    const statIndexToUpdate = this.listeStats.findIndex(
      (postToUpdate) => {
        if (postToUpdate.classeName === statsToEdit.classeName && postToUpdate.specName === statsToEdit.specName) {
          return true;
        }
      }
    );
    this.listeStats[statIndexToUpdate] = statsToEdit;
    this.saveStats();
    this.emitStats();
  }

  //TODO
  removeStats(newStats: PoidsDesStats) {
    const postIndexToRemove = this.listeStats.findIndex(
      (statsToDelete) => {
        if (statsToDelete === newStats) {
          return true;
        }
      }
    );
    this.listeStats.splice(postIndexToRemove, 1);
    this.saveStats();
    this.emitStats();
  }
}
