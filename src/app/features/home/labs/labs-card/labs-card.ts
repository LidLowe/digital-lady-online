import {Component, Input} from '@angular/core';
import {LabsIcons} from './labs-icons/labs-icons';

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

    hovered: boolean = false;
}
