import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsDetails } from './labs-details';

describe('LabsDetails', () => {
    let component: LabsDetails;
    let fixture: ComponentFixture<LabsDetails>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LabsDetails],
        }).compileComponents();

        fixture = TestBed.createComponent(LabsDetails);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
