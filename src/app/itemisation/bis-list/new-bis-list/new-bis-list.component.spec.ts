import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBisListComponent } from './new-bis-list.component';

describe('NewBisListComponent', () => {
  let component: NewBisListComponent;
  let fixture: ComponentFixture<NewBisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
