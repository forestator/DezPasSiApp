import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BisListComponent } from './bis-list.component';

describe('BisListComponent', () => {
  let component: BisListComponent;
  let fixture: ComponentFixture<BisListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BisListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
