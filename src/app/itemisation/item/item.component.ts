import {Component, Input, OnInit} from '@angular/core';
import {ItemsDonnesService} from '../../services/items-donnes.service';
import {Item} from '../../services/wow-wapi-guild-members.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() characterName: string;
  items: Item[];
  itemSubscription: Subscription;

  constructor(private itemService: ItemsDonnesService) {
  }

  ngOnInit(): void {
    this.itemSubscription = this.itemService.listeItemDonnesSubject.subscribe(
      (items: Item[]) => {
        this.items = items;
      }
    );
    this.itemService.emitItemsDonnes();
  }

  findItemsId() {
    for(let item of this.items){
      if (item.characterName == this.characterName){
        return item.idItem;
      } else {
       return 0;
      }
    }
  }

  findItemName() {
    for(let item of this.items){
      if (item.characterName == this.characterName){
        return item.name;
      } else {
        return 'pas d\'objets';
      }
    }
  }

  findItemBonus() {
    for(let item of this.items){
      if (item.characterName == this.characterName){
        return item.bonus;
      } else {
        return 'pas d\'objets';
      }
    }
  }
}
