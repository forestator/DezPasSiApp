import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemAssociationComponent } from './new-item-association.component';

describe('NewItemAssociationComponent', () => {
  let component: NewItemAssociationComponent;
  let fixture: ComponentFixture<NewItemAssociationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewItemAssociationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewItemAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
