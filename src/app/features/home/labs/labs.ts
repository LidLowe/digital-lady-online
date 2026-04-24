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
        { id: 1, title: 'Samsung Lab', description: 'Текст 1', icon: "android"},
        { id: 2, title: 'Apple Lab', description: 'Текст 2', icon: "apple"},
        { id: 3, title: '3D Lab', description: 'Текст 3', icon: "cube"},
        { id: 4, title: 'Cisco Lab', description: 'Cisco', icon: "network"}
    ];
}
