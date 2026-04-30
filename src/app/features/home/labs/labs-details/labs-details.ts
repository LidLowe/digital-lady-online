import { Component, Inject } from '@angular/core';
import { LabsIcons } from '../labs-card/labs-icons/labs-icons';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

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
    private details = [
        {
            id: 1,
            title: 'Samsung Lab',
            icon: 'android',
            description: 'Здесь мы исследуем и разрабатываем проекты, связанные с технологиями Samsung и их программным обеспечениям. Лаборатория позволяет проверять возможности Software продуктов на практике.',
            major: [
                'Разработка на Java/Kotlin',
                'Сенсоры и умные устройства',
                'Работа с Big Data'
            ],
            techBase: 'Флагманские устройства Samsung Galaxy, микроконтроллеры Arduino, IoT-контроллеры.'
        },
        {
            id: 2,
            title: 'Apple Lab',
            icon: 'apple',
            description: 'Лаборатория Apple Lab предлагает возможности для разработки Web и Desktop приложений совместимых для работы с устройствами IOS.',
            major: [
                'Обучение Swift/SwiftUI',
                'UI/UX дизайн приложений',
                'Публикация в App Store'
            ],
            techBase: 'MacBook Pro M2/M3, iPad Pro 12.9, iMac 24-дюйма.'
        },
        {
            id: 3,
            title: '3D Lab',
            icon: 'cube',
            description: 'Лаборатория имеет многофункциональные виртуальные линзы, специализированные мониторы для погружения и костюм захвата движения ROKOKO.',
            major: [
                '3D-печать пластиком',
                'Лазерная резка',
                '3D-сканирование лиц и объектов'
            ],
            techBase: 'Фрезерный станок, лазерный станок.'
        },
        {
            id: 4,
            title: 'Cisco Networking Academy',
            icon: 'network',
            description: 'Лаборатория специализируется на сетевом оборудовании, программном обеспечении, телекоммуникационном оборудовании, кибербезопасности и решениях на основе искусственного интеллекта.',
            major: [
                'Настройка роутеров и свитчей',
                'Сетевая безопасность',
                'ИИ для телекоммуникации'
            ],
            techBase: 'Стоечное оборудование Cisco 2900 series, Маршрутизаторы ISR.'
        },
    ];
    protected detail: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public item: {
            id: number;
            icon: string;
            },
        private dialogRef: MatDialogRef<LabsDetails>,
    ) {};

    close() {
        this.dialogRef.close();
    }

    ngOnInit() {
        this.detail = this.details.find(d => d.id === this.item.id);
    }
}
