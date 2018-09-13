import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {Subject} from 'rxjs';
import {Member} from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members: Member[] = [];
  memberSubject = new Subject<Member[]>();

  emitMembers() {
    this.memberSubject.next(this.members);
  }

  saveMembers() {
    firebase.database().ref('/members').set(this.members);
  }

  getMembers() {
    firebase.database().ref('/members')
      .on('value', (data: DataSnapshot) => {
          this.members = data.val() ? data.val() : [];
          this.emitMembers();
        }
      );
  }

  constructor() {
    this.getMembers();
  }

  createNewMember(newMember: Member) {
    this.members.push(newMember);
    this.saveMembers();
    this.emitMembers();
  }

  removeMember(member: Member) {
    const memberIndexToRemove = this.members.findIndex(
      (memberToDelete) => {
        if (memberToDelete === member) {
          return true;
        }
      }
    );
    this.members.splice(memberIndexToRemove, 1);
    this.saveMembers();
    this.emitMembers();
  }

}
