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

    items = [
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
        { id: 1, title: 'Карточка 1', description: 'Текст 1', url: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg' },
    ];
}
