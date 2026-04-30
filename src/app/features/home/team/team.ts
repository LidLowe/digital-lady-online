import { Component } from '@angular/core';
import { TeamCard } from './team-card/team-card';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [TeamCard],
    templateUrl: './team.html',
    styleUrl: './team.css',
})
export class Team {
    items = [
        {
            id: 1,
            name: 'Жумадилова\n' + 'Айнур\n' + 'Мырзахановна',
            role: 'Проектный менеджер',
            url: '1.jpg',
        },
        {
            id: 2,
            name: 'Нұрислам\n' + 'Еркінұлы',
            role: 'Проектный менеджер',
            url: '2.jpg',
        },
        { id: 4, name: 'Хамза Дәулетбек Ерғалиұлы', role: 'Руководитель отдела', url: '4.jpg' },
        { id: 3, name: 'Байсұлтан Рамазан Аралбайұлы', role: 'Software Engineer', url: '3.jpg' },
        { id: 5, name: 'Жасқайратұлы Марғұлан', role: 'Software Engineer', url: '5.jpg' },
    ];
}
