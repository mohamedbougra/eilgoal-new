import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamlineupComponent } from './teamlineup.component';

describe('TeamlineupComponent', () => {
  let component: TeamlineupComponent;
  let fixture: ComponentFixture<TeamlineupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamlineupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamlineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
