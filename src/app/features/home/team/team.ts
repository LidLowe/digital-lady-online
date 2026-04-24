import { Component } from '@angular/core';
import { TeamCard } from './team-card/team-card';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [
        TeamCard
    ],
    templateUrl: './team.html',
    styleUrl: './team.css',
})

export class Team {
    items = [
        { id: 1, name: "Template", role: "Template", url: "1.jpg" },
        { id: 2, name: "Template", role: "Template", url: "2.jpg" },
        { id: 3, name: "Template", role: "Template", url: "3.jpg" },
        { id: 4, name: "Template", role: "Template", url: "4.jpg" },
        { id: 5, name: "Template", role: "Template", url: "5.jpg" },
    ]
}
