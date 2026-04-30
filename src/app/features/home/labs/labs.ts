import { Component } from '@angular/core';
import { LabsCard } from './labs-card/labs-card';

@Component({
    selector: 'app-labs',
    imports: [LabsCard],
    templateUrl: './labs.html',
    styleUrl: './labs.css',
    standalone: true
})

export class Labs {
    items = [
        { id: 1, title: 'Samsung Lab', description: 'Разработка решений для мобильных платформ.', icon: "android"},
        { id: 2, title: 'Apple Lab', description: 'Создание приложений для iOS, macOS и iPadOS.', icon: "apple"},
        { id: 3, title: '3D Lab', description: 'От идеи до физического объекта.', icon: "cube"},
        { id: 4, title: 'Cisco Lab', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci.', icon: "network"}
    ];
}
