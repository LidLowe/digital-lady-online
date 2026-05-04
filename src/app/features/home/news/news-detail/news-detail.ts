import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
@Component({
    selector: 'app-news-detail',
    imports: [
        MatDialogModule,
    ],
    templateUrl: './news-detail.html',
    styleUrl: './news-detail.css',
    standalone: true
})

export class NewsDetail {
    private readonly details = [
        {
            id: 1,
            title: "Запуск сайта",
            date: "30.04.2026",
            text: `
                    <p>Мы рады объявить о запуске <strong>digitallady.online</strong> — инновационной экосистемы...</p>
                    <p>Здесь, в коллаборации с лидерами индустрии, работают четыре ключевые лаборатории:</p>
                    <p>📱 <strong>Samsung Lab</strong> — среда для разработки мобильных решений;</p>
                    <p>🍏 <strong>Apple Lab</strong> — создание приложений для iOS, macOS и iPadOS;</p>
                    <p>🔬 <strong>3D Lab</strong> — путь от цифрового эскиза до физического объекта;</p>
                    <p>🌐 <strong>Cisco Lab</strong> — лаборатория сетевых технологий и телекоммуникаций.</p>
`
        }
    ];
    protected detail: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {
            id: number;
        },
        private dialogRef: MatDialogRef<NewsDetail>,
    ) {};

    close(): void {
        this.dialogRef.close();
    }

    ngOnInit(): void {
        this.detail = this.details.find(d => d.id === this.data.id);
    }
}
