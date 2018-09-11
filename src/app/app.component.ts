import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DezPasSiApp';
  constructor() {
    const config = {
      apiKey: 'AIzaSyDoGJPG-wWsSvP_QnrHdJWgQpgBsuAtWFc',
      authDomain: 'blog-angular-oc.firebaseapp.com',
      databaseURL: 'https://blog-angular-oc.firebaseio.com',
      projectId: 'blog-angular-oc',
      storageBucket: 'blog-angular-oc.appspot.com',
      messagingSenderId: '1010641227525'
    };
    firebase.initializeApp(config);
  }
}
