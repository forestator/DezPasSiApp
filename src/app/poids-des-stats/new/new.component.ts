import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatsService} from '../../services/stats.service';
import {Router} from '@angular/router';
import {PoidsDesStats} from '../../models/PDS';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  pdsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private statsService: StatsService,private router: Router){}

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.pdsForm = this.formBuilder.group({
      specName: ['', Validators.required],
      statsMono: ['', Validators.required],
      statsMulti: ['', Validators.required]
    });
  }

  onSavePds() {
    const specName = this.pdsForm.get('specName').value;
    const statsMono = this.pdsForm.get('statsMono').value;
    const statsMulti = this.pdsForm.get('statsMulti').value;
    const newPds = new PoidsDesStats(specName,statsMono,statsMulti);
    this.statsService.createNewStats(newPds);
    this.router.navigate(['/pds']);
  }
}
