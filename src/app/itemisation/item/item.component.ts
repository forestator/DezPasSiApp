import {Component, Input, OnInit} from '@angular/core';
import {ItemsDonnesService} from '../../services/items-donnes.service';
import {Item} from '../../services/wow-wapi-guild-members.service';
import {Subscription} from 'rxjs';

let input = Input;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  constructor() {
  }

  ngOnInit(): void {
  }
}
