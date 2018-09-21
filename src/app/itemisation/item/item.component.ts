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

  constructor(private itemService: ItemsDonnesService) {
  }

  ngOnInit(): void {
    this.items.push(new Item('TOTO',1,'TUTU','1412'));
    this.getCharacterItems();
    this.itemService.emitItemsDonnes();
  }

  getCharacterItems(){
   this.items = this.itemService.getItemByCharacterName(this.characterName);
   for (let item of this.items){
     console.log('Item de '+this.characterName+' '+item.name);
   }
  }

}
