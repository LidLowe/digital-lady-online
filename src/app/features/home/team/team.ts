import { Component } from '@angular/core';
import {TeamCard} from './team-card/team-card';

@Component({
    selector: 'app-team',
    imports: [
        TeamCard
    ],
    templateUrl: './team.html',
    styleUrl: './team.css',
})

export class Team {
    items!: [
        { id: 1, name: "", role: "", url: "" },
        { id: 2, name: "", role: "", url: "" },
        { id: 3, name: "", role: "", url: "" },
        { id: 4, name: "", role: "", url: "" },
        { id: 5, name: "", role: "", url: "" },
    ]
}
