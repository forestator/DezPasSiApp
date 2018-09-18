import { Component, OnInit } from '@angular/core';
import { StatsService} from '../services/stats.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PoidsDesStats} from '../models/PDS';

@Component({
  selector: 'app-poids-des-stats',
  templateUrl: './poids-des-stats.component.html',
  styleUrls: ['./poids-des-stats.component.css']
})
export class PoidsDesStatsComponent implements OnInit {

  listeStats: PoidsDesStats[];
  statsSubscription: Subscription;

  constructor(private statsService: StatsService, private router: Router) {
  }

  ngOnInit() {
    this.statsSubscription = this.statsService.statsSubject.subscribe(
      (listeStats: PoidsDesStats[]) => {
        this.listeStats = listeStats;
  /*      this.listeStats.sort((a,b) =>{
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;});  */
      }
    );
    this.statsService.emitStats();
  }

  onNewStats() {
    this.router.navigate(['/newpds']);
  }

  onDeleteStats(pds: PoidsDesStats) {
    this.statsService.removeStats(pds);
  }


  ngOnDestroy() {
    this.statsService.unsubscribe();
  }

}
