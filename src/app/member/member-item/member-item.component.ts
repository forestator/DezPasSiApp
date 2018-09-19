import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {CharacterDetailsService, RootObject} from '../../services/character-details.service';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {

  @Input() nomMembre: string;
  memberSubscription: Subscription;
  memberDetail: RootObject;

  constructor(private wowService: CharacterDetailsService) {
  }

  ngOnInit() {
    this.showMembreDetail();
  }

  showMembreDetail() {
    this.memberSubscription = this.wowService.getMember(this.nomMembre).subscribe((root: RootObject) => {
      this.memberDetail = root;
    });

  }
}
