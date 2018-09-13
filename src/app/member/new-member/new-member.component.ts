import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MembersService} from '../../services/members.service';
import {Router} from '@angular/router';
import {Member} from '../../models/Member';
import {Classe} from '../../models/Classe';
import {ChamanClass} from '../../models/ClassDetails/ChamanClass';
import {DemonHunterClass} from '../../models/ClassDetails/DemonHunterClass';
import {DeathKnightClass} from '../../models/ClassDetails/DeathKnightClass';
import {DemonistClass} from '../../models/ClassDetails/DemonistClass';
import {DruidClass} from '../../models/ClassDetails/DruidClass';
import {HuntClass} from '../../models/ClassDetails/HuntClass';
import {MageClass} from '../../models/ClassDetails/MageClass';
import {MonkClass} from '../../models/ClassDetails/MonkClass';
import {PaladinClass} from '../../models/ClassDetails/PaladinClass';
import {PriestClass} from '../../models/ClassDetails/PriestClass';
import {RogueClass} from '../../models/ClassDetails/RogueClass';
import {WarriorClass} from '../../models/ClassDetails/WarriorClass';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {

  selectedSpecs: Array<string>;
  memberForm: FormGroup;
  availableClasses: Array<Classe> = [new ChamanClass(),new DemonHunterClass(),new DeathKnightClass(),new DemonistClass(),
  new DruidClass(),new HuntClass(),new MageClass(),new MonkClass(),new PaladinClass(), new PriestClass(), new RogueClass(), new WarriorClass()];

  constructor(private formBuilder: FormBuilder, private memberService: MembersService,private router: Router){  }

  ngOnInit(): void {
    this.initForm();  }


  initForm() {
    this.memberForm = this.formBuilder.group({
      name: ['', Validators.required],
      classe: ['', Validators.required],
      rank: ['', Validators.required],
      spec: ['', Validators.required],
    });
  }

  onSavePost() {
    const name = this.memberForm.get('name').value;
    const classe = this.memberForm.get('classe').value;
    const rank = this.memberForm.get('rank').value;
    const spec = this.memberForm.get('spec').value;
    const newMember = new Member(name,classe,spec,rank);
    this.memberService.createNewMember(newMember);
    this.router.navigate(['/members']);
  }

  onSelectOption() {
    const classe = this.memberForm.get('classe').value as Classe;
    this.selectedSpecs = classe.specs;
  }

}
