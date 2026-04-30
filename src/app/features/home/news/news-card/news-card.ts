import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewsDetail} from '../news-detail/news-detail';

@Component({
    selector: 'app-news-card',
    imports: [],
    templateUrl: './news-card.html',
    styleUrl: './news-card.css',
    standalone: true
})

export class NewsCard {
    @Input() item!: {
        id: number;
        title: string;
        description: string;
        url: string;
    }

    constructor(private dialog: MatDialog) {}

    openDialog(): void {
        this.dialog.open(NewsDetail, {
            minWidth: '95vw',
            minHeight: '95vh',

            data: this.item,
        });
    }
}
