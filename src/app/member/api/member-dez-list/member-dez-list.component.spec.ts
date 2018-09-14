import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDezListComponent } from './member-dez-list.component';

describe('MemberDezListComponent', () => {
  let component: MemberDezListComponent;
  let fixture: ComponentFixture<MemberDezListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDezListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDezListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
