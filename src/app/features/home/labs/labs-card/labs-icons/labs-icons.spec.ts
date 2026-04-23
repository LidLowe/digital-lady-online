import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsIcons } from './labs-icons';

describe('LabsIcons', () => {
    let component: LabsIcons;
    let fixture: ComponentFixture<LabsIcons>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LabsIcons],
        }).compileComponents();

        fixture = TestBed.createComponent(LabsIcons);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
