import {Component, Input} from '@angular/core';
import {LabsIcons} from './labs-icons/labs-icons';
import {MatDialog} from '@angular/material/dialog';
import {LabsDetails} from '../labs-details/labs-details';

@Component({
  selector: 'app-labs-card',
    imports: [
        LabsIcons
    ],
  templateUrl: './labs-card.html',
  styleUrl: './labs-card.css',
})

export class LabsCard {
    @Input() item!: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };

    constructor(private dialog: MatDialog) {}

    openDialog() {
        this.dialog.open(LabsDetails, {
            minWidth: '80vw',
            minHeight: '80vh',

            data: this.item,
        });
    }

    protected hovered: boolean = false;
}
