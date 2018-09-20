import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StatsService} from '../../services/stats.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PoidsDesStats} from '../../models/PDS';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pdsForm: FormGroup;
  spec: string;
  mono: string;
  multi: string;
  classe: string;


  constructor(private formBuilder: FormBuilder, private statsService: StatsService,private route: ActivatedRoute,private router: Router){
    this.route.params.subscribe( params => this.doSearch(params));
  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.pdsForm = this.formBuilder.group({
      specName: [this.spec, Validators.required],
      statsMono: [this.mono, Validators.required],
      statsMulti: [this.multi, Validators.required],
      classeName: [this.classe, Validators.required]
    });
  }

  onEditPds() {
    const specName = this.pdsForm.get('specName').value;
    const statsMono = this.pdsForm.get('statsMono').value;
    const statsMulti = this.pdsForm.get('statsMulti').value;
    const classeName = this.pdsForm.get('classeName').value;
    const newPds = new PoidsDesStats(classeName,specName, statsMono, statsMulti, new Date().toJSON());
    this.statsService.editStats(newPds);
    this.router.navigate(['/pds']);
  }

  private doSearch(params) {
    console.log(params);
    this.classe = params.classe;
    this.spec = params.spec;
    this.mono = params.mono;
    this.multi = params.multi;
  }
}
