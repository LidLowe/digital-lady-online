import { Component } from '@angular/core';
import {LabsCard} from './labs-card/labs-card';

@Component({
    selector: 'app-labs',
    imports: [
        LabsCard
    ],
    templateUrl: './labs.html',
    styleUrl: './labs.css',
})

export class Labs {
    items = [
        { id: 1, title: 'Карточка 1', description: 'Текст 1' },
        { id: 2, title: 'Карточка 2', description: 'Текст 2' },
        { id: 3, title: 'Карточка 3', description: 'Текст 3' },
    ];
}
