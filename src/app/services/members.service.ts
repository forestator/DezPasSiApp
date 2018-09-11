import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {Subject} from 'rxjs';
import {Member} from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }
}
