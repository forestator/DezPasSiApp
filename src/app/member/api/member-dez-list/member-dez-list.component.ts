import { Component, OnInit } from '@angular/core';
import {Member, RootObject, WowWapiGuildMembersService} from '../../../services/wow-wapi-guild-members.service';
import {Subscription} from 'rxjs';
import {StatsService} from '../../../services/stats.service';
import {PoidsDesStats} from '../../../models/PDS';
import {Router} from '@angular/router';
import {ItemsDonnesService} from '../../../services/items-donnes.service';

@Component({
  selector: 'app-member-dez-list',
  templateUrl: './member-dez-list.component.html',
  styleUrls: ['./member-dez-list.component.css']
})
export class MemberDezListComponent implements OnInit {

  listeStats: PoidsDesStats[];
  statsSubscription: Subscription;
  members: Member[];
  memberSubscription: Subscription;

  constructor(private wowService: WowWapiGuildMembersService, private statsService: StatsService,private itemService: ItemsDonnesService) {
  }

  ngOnInit() {
    this.showMembers();
    this.showStats();
  }

  showStats() {
    this.statsSubscription = this.statsService.statsSubject.subscribe(
      (listeStats: PoidsDesStats[]) => {
        this.listeStats = listeStats;
      }
    );
    this.statsService.emitStats();
  }

  showMembers() {
    this.memberSubscription = this.wowService.getMembers().subscribe((root: RootObject) => {
      this.members = root.members;
      this.members.sort((a,b) =>{
        if (a.rank > b.rank) return 1;
        if (a.rank < b.rank) return -1;});
    });

  }

  textClasse(classe){
    switch (classe) {
      case 1: {
        return 'Warrior';
      }
      case 2: {
        return 'Paladin ';

      }
      case 3: {
        return 'Hunter ';

      }
      case 4: {
        return 'Rogue';

      }
      case 5: {
        return 'Priest';

      }
      case 6: {
        return 'DeathKnight ';

      }
      case 7: {
        return 'Shaman';

      }
      case 8: {
        return 'Mage ';

      }
      case 9: {
        return 'Warlock ';

      }
      case 10: {
        return 'Monk ';

      }
      case 11: {
        return 'Druid ';

      }
      case 12: {
        return 'Demon Hunter';

      }
      default: {
        return "erreur";

      }
    }
  }

  //Permet de se placer dans le tableau de membres en fonction de la classe
  tabIterator(n:number){
    return (n -1)*3;
  }

  findStatsBySpecMono(specName: string, classe:number){
    for (let j = (this.tabIterator(classe)); j <= (this.tabIterator(classe)+2); j++) {
      if (this.listeStats[j].specName == specName){
        return this.listeStats[j].statsMono;
      }
    }
  }

  findStatsBySpecMulti(specName: string, classe:number){
    for (let j = (this.tabIterator(classe)); j <= (this.tabIterator(classe)+2); j++) {
      if (this.listeStats[j].specName == specName){
        return this.listeStats[j].statsMulti;
      }
    }
  }

  textRank(rank: number){
    switch (rank) {
      case 0: {
        return 'Maitre de Guilde';
      }
      case 1: {
        return 'Officier';
      }
      case 2: {
        return 'Rerool Officier ';

      }
      case 3: {
        return 'Fondateur ';

      }
      case 4: {
        return   'Membre';

      }
      case 5: {
        return  'Rerool ';

      }
      default: {
        return "erreur";

      }
    }

  }

}
