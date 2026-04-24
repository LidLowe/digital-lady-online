import {Component, Inject} from '@angular/core';
import {LabsIcons} from '../labs-card/labs-icons/labs-icons';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

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
            description: 'Совместный проект с Samsung по обучению молодых специалистов в сфере интернета вещей (IoT) и программирования.',
            major: [
                'Разработка на Java/Kotlin',
                'Сенсоры и умные устройства',
                'Работа с Big Data'
            ],
            techBase: 'Флагманские устройства Samsung Galaxy, датчики Arduino, IoT-контроллеры.'
        },
        {
            id: 2,
            title: 'Apple Lab',
            icon: 'apple',
            description: 'Специализированный центр разработки для всей экосистемы Apple (iOS, macOS, watchOS).',
            major: [
                'Обучение Swift/SwiftUI',
                'UI/UX дизайн приложений',
                ' Публикация в App Store'
            ],
            techBase: 'MacBook Pro M2/M3, iPad Pro 12.9, iMac 24-дюйма.'
        },
        {
            id: 3,
            title: '3D Lab',
            icon: 'cube',
            description: 'Лаборатория аддитивных технологий, где студенты воплощают свои инженерные идеи в реальные прототипы.',
            major: [
                '3D-печать пластиком',
                'Лазерная резка',
                '3D-сканирование лиц и объектов'
            ],
            techBase: 'FDM-принтеры Ultimaker, SLA-станция Anycubic Photon, Лазерный гравер.'
        },
        {
            id: 4,
            title: 'Cisco Networking Academy',
            icon: 'network',
            description: 'Международная программа подготовки сетевых инженеров и специалистов по кибербезопасности.',
            major: [
                'Настройка роутеров и свитчей',
                'Сетевая безопасность',
                'Сертификация CCNA'
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
