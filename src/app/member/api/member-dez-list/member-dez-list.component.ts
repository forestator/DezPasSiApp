import { Component, OnInit } from '@angular/core';
import {Member, RootObject, WowWapiGuildMembersService} from '../../../services/wow-wapi-guild-members.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-member-dez-list',
  templateUrl: './member-dez-list.component.html',
  styleUrls: ['./member-dez-list.component.css']
})
export class MemberDezListComponent implements OnInit {

  constructor(private wowService: WowWapiGuildMembersService) {
  }

  members: Member[];
  memberSubscription: Subscription;

  ngOnInit() {
    this.showRealms();
  }

  showRealms() {
    this.memberSubscription = this.wowService.getRealms().subscribe((root: RootObject) => {
      this.members = root.members;
      this.members.sort((a,b) =>{
        if (a.rank > b.rank) return 1;
        if (a.rank < b.rank) return -1;});
    });

  }

  textClasse(classe){
    switch (classe) {
      case 1: {
        return classe =  'Warrior';
      }
      case 2: {
        return         classe =  'Paladin ';

      }
      case 3: {
        return         classe =  'Hunter ';

      }
      case 4: {
        return         classe =  'Rogue';

      }
      case 5: {
        return         classe =  'Priest ';

      }
      case 6: {
        return         classe =  'DeathKnight ';

      }
      case 7: {
        return         classe =  'Shaman';

      }
      case 8: {
        return         classe =  'Mage ';

      }
      case 9: {
        return         classe =  'Warlock ';

      }
      case 10: {
        return         classe =  'Monk ';

      }
      case 11: {
        return         classe =  'Druid ';

      }
      case 12: {
        return         classe =  'Demon Hunter';

      }
      default: {
        return classe = "erreur";

      }
    }
  }
}
