import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-team-card',
    standalone: true,
    imports: [],
    templateUrl: './team-card.html',
    styleUrl: './team-card.css',
})

export class TeamCard {
    @Input() item!: {
        id: number;
        name: string;
        role: string;
        url: string;
    }
}
