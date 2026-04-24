import {Component, Inject} from '@angular/core';
import {LabsIcons} from '../labs-card/labs-icons/labs-icons';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-labs-details',
    imports: [
        LabsIcons,
        MatDialogModule,
    ],
    templateUrl: './labs-details.html',
    styleUrl: './labs-details.css',
})
export class LabsDetails {
    constructor(
        @Inject(MAT_DIALOG_DATA) public item: {
            id: number;
            title: string;
            description: string;
            icon: string;
            },
        private dialogRef: MatDialogRef<LabsDetails>,
    ) {};

    close() {
        this.dialogRef.close();
    }
}
