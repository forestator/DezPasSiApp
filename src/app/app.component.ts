import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyBpTG_PJztP6z-TvyKH6cq6lt3yJkXsr8M",
      authDomain: "dezpassiapp.firebaseapp.com",
      databaseURL: "https://dezpassiapp.firebaseio.com",
      projectId: "dezpassiapp",
      storageBucket: "dezpassiapp.appspot.com",
      messagingSenderId: "46683448009"
    };
    firebase.initializeApp(config);
  }
}
