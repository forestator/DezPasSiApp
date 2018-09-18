import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoidsDesStatsComponent } from './poids-des-stats.component';

describe('PoidsDesStatsComponent', () => {
  let component: PoidsDesStatsComponent;
  let fixture: ComponentFixture<PoidsDesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoidsDesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoidsDesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
