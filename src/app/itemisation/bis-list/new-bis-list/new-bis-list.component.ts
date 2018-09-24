import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatsService} from '../../../services/stats.service';
import {Router} from '@angular/router';
import {BisItem} from '../../../models/BisItem';
import {SpeBisListService} from '../../../services/spe-bis-list.service';

@Component({
  selector: 'app-new-bis-list',
  templateUrl: './new-bis-list.component.html',
  styleUrls: ['./new-bis-list.component.css']
})
export class NewBisListComponent implements OnInit {

  BisListForm: FormGroup;

  BisItemType: BisItem;

  constructor(private formBuilder: FormBuilder, private speBisList: SpeBisListService,private router: Router){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.BisListForm = this.formBuilder.group({
      id: ['', Validators.required],
      spe: ['', Validators.required],
      slot: ['', Validators.required],
      name: ['', Validators.required],
      bonus: ['', Validators.required],
      dropBy: ['', Validators.required],
      dungeonOrRaid: ['', Validators.required],
    });
  }

  onSaveBisList() {
    const id = this.BisListForm.get('id').value;
    const spe = this.BisListForm.get('spe').value;
    const slot = this.BisListForm.get('slot').value;
    const name = this.BisListForm.get('name').value;
    const bonus = this.BisListForm.get('bonus').value;
    const dropBy = this.BisListForm.get('dropBy').value;
    const dungeonOrRaid = this.BisListForm.get('dungeonOrRaid').value;
    const newBisItem = new BisItem(id, spe, slot, name, bonus,dropBy,dungeonOrRaid);
    this.speBisList.createNewBisList(newBisItem);
    this.router.navigate(['/bisList']);

  }
}
