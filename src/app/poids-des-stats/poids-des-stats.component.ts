import {Component, OnInit} from '@angular/core';
import {StatsService} from '../services/stats.service';
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


  affichageDate(dateDeModif: string) {
    if (dateDeModif == null) {
      return '20/09/2018';
    } else {
      return dateDeModif;
    }
  }

  onEditClick(stat: PoidsDesStats) {
    this.router.navigate(['/editPds/'+stat.specName+'/'+stat.statsMono+'/'+stat.statsMulti+'/'+stat.classeName])
  }


}
