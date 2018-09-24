import { Component } from '@angular/core';
import * as firebase from 'firebase';
import {config, environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }
}
