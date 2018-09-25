import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {config} from '../environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(db: AngularFirestore) {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
}
