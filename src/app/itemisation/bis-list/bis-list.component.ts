import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bis-list',
  templateUrl: './bis-list.component.html',
  styleUrls: ['./bis-list.component.css']
})
export class BisListComponent implements OnInit {

  listeDesSpes: Array<string> = ['Fury','Prot','Armes'];
  currentSpe: string;
  constructor() {
  }

  ngOnInit() {
  }

  setSpe(specialisation: string) {
    this.currentSpe = specialisation;
    console.log(this.currentSpe)
  }

}
