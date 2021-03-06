import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item, Member, RootObject, WowWapiGuildMembersService} from '../../../services/wow-wapi-guild-members.service';
import {Subscription} from 'rxjs';
import {StatsService} from '../../../services/stats.service';
import {PoidsDesStats} from '../../../models/PDS';
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
  items: Item[];
  itemSubscription: Subscription;
  characterItems: Item[] = [];

  constructor(private wowService: WowWapiGuildMembersService, private statsService: StatsService,private itemService: ItemsDonnesService) {
  }

  ngOnInit() {
    this.showMembers();
    this.showStats();
    this.showItems();
  }

  showItems(){
    this.itemSubscription = this.itemService.listeItemDonnesSubject.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
    this.itemService.emitItemsDonnes();
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
        return 'Guerrier';
      }
      case 2: {
        return 'Paladin';

      }
      case 3: {
        return 'Chasseur';

      }
      case 4: {
        return 'Voleur';

      }
      case 5: {
        return 'Prêtre';

      }
      case 6: {
        return 'Chevalier de la mort';

      }
      case 7: {
        return 'Chaman';

      }
      case 8: {
        return 'Mage';

      }
      case 9: {
        return 'Démoniste';

      }
      case 10: {
        return 'Moine';

      }
      case 11: {
        return 'Druide';

      }
      case 12: {
        return 'Chasseur de démons';

      }
      default: {
        return "Recrue";

      }
    }
  }


  findStatsBySpecMono(specName: string, classe:string){
    for (let stat of this.listeStats){
      if (stat.specName == specName && stat.classeName == classe){
        return stat.statsMono;
      }
    }
  }

  findStatsBySpecMulti(specName: string, classe:string){
    for (let stat of this.listeStats){
      if (stat.specName == specName && stat.classeName == classe){
        return stat.statsMulti;
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
        return "Recrue";

      }
    }
  }

  ngOnDestroy(){
    this.itemService.unsubscribe();
    this.statsService.unsubscribe();
    this.memberSubscription.unsubscribe();
    this.statsSubscription.unsubscribe();
    this.itemSubscription.unsubscribe();
  }

  memberItems(name: string) {
    this.characterItems = [];
    for (let item of this.items){
      if (item.characterName == name){
        this.characterItems.push(item);
      }
    }
    return this.characterItems;
  }

}
