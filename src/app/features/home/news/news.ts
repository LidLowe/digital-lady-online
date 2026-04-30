import {Component, ElementRef, ViewChild} from '@angular/core';
import {NewsCard} from './news-card/news-card';

@Component({
    selector: 'app-news',
    imports: [
        NewsCard
    ],
    templateUrl: './news.html',
    styleUrl: './news.css',
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
            url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg'
        },
        {
            id: 2,
            title: 'События',
            description: 'AI материал для конференции',
            url: 'https://static.tildacdn.ink/tild6136-6561-4464-b064-663238636334/WhatsApp_Image_2026-.jpeg'
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
