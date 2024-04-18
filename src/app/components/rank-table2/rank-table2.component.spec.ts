import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankTable2Component } from './rank-table2.component';

describe('RankTable2Component', () => {
  let component: RankTable2Component;
  let fixture: ComponentFixture<RankTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankTable2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
