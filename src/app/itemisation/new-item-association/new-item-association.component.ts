import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ItemsDonnesService} from '../../services/items-donnes.service';
import {Item} from '../../services/wow-wapi-guild-members.service';


@Component({
  selector: 'app-new-item-association',
  templateUrl: './new-item-association.component.html',
  styleUrls: ['./new-item-association.component.css']
})
export class NewItemAssociationComponent implements OnInit {

  itemAssoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private itemAssoService: ItemsDonnesService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.itemAssoForm = this.formBuilder.group({
      characterName: ['', Validators.required],
      idItem: ['', Validators.required],
      name: ['', Validators.required],
      bonus: ['', Validators.required],
    });
  }

  onSaveAsso() {
    const characterName = this.itemAssoForm.get('characterName').value;
    const idItem = this.itemAssoForm.get('idItem').value;
    const name = this.itemAssoForm.get('name').value;
    const bonus = this.itemAssoForm.get('bonus').value;
    const newAsso = new Item(characterName, idItem, name,bonus);
    this.itemAssoService.addAssociation(newAsso);
    this.router.navigate(['/members']);
  }

}
