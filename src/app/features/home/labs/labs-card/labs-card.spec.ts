import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsCard } from './labs-card';

describe('LabsCard', () => {
  let component: LabsCard;
  let fixture: ComponentFixture<LabsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabsCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LabsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
