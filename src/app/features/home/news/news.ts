import {Component, ElementRef, ViewChild} from '@angular/core';
import {NewsCard} from './news-card/news-card';

@Component({
    selector: 'app-news',
    imports: [
        NewsCard
    ],
    templateUrl: './news.html',
    styleUrl: './news.css',
    standalone: true
})
export class News {
    @ViewChild('newsList') newsList!: ElementRef;

    ngAfterViewInit() {
        this.newsList.nativeElement.addEventListener('wheel', (e: WheelEvent) => {
            e.preventDefault();
            this.newsList.nativeElement.scrollLeft += e.deltaY;
        }, { passive: false });
    }

    cards = [
        {
            id: 1,
            title: 'Объявление',
            description: 'Сайт запущен',
            url: 'assets/NewLogo.jpg'
        },
        {
            id: 2,
            title: 'События',
            description: 'AI материал для конференции',
            url: 'https://static.tildacdn.ink/tild3331-3737-4565-b964-656361663034/WhatsApp_Image_2026-.jpeg'
        },
        {
            id: 3,
            title: 'Робототехника',
            description: 'Освоение станков в Fablab',
            url: 'https://static.tildacdn.ink/tild6136-6561-4464-b064-663238636334/WhatsApp_Image_2026-.jpeg'
        },
        {
            id: 4,
            title: 'События',
            description: 'Выставка Nauryz 2026',
            url: 'https://static.tildacdn.ink/tild6166-6634-4263-b032-363463346134/WhatsApp_Image_2026-.jpeg',
        }
    ];
}
