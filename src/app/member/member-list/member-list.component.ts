import {Component, NgModule, OnInit} from '@angular/core';
import {Member} from '../../models/Member';
import {Subscription} from 'rxjs';
import {MembersService} from '../../services/members.service';
import {Router} from '@angular/router';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [MemberListComponent]
})
export class MemberListComponent implements OnInit {

  members: Member[];
  membersSubscription: Subscription;

  constructor(private memberService: MembersService, private router: Router) {
  }

  ngOnInit() {
    this.membersSubscription = this.memberService.memberSubject.subscribe(
      (members: Member[]) => {
        this.members = members;
      }
    );
    this.memberService.emitMembers();
    console.log(this.members.length);
    console.log(this.membersSubscription);
  }

  onNewMember() {
    this.router.navigate(['/newMember']);
  }

  onDeleteMember(member: Member) {
    this.memberService.removeMember(member);
  }

  ngOnDestroy() {
    this.membersSubscription.unsubscribe();
  }

  removeSpace(remove){
    return remove.replace(' ','');
  }
}
