import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {BisItem} from '../../models/BisItem';
import {SpeBisListService} from '../../services/spe-bis-list.service';

@Component({
  selector: 'app-bis-list',
  templateUrl: './bis-list.component.html',
  styleUrls: ['./bis-list.component.css']
})
export class BisListComponent implements OnInit {

  listeDesSpes: Array<string> = ['Fury','Prot','Armes'];
  listeBisItems: BisItem[];
  currentSpe: string = 'Armes';
  bisSubscription: Subscription;

  constructor(private bisListService: SpeBisListService, private router: Router) {
  }

  ngOnInit() {
    this.bisSubscription = this.bisListService.listeBisSubject.subscribe(
      (listeBisItems: BisItem[]) => {
        this.listeBisItems = listeBisItems;
      }
    );
    this.bisListService.emitBis();
  }

  onNewStats() {
    this.router.navigate(['/newBisListItems']);
  }


  setCurrentSpe(spe: string) {

  }
}
