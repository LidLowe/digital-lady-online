import {Component, Input} from '@angular/core';
import {it} from 'vitest';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-news-card',
    imports: [],
  templateUrl: './news-card.html',
  styleUrl: './news-card.css',
})

export class NewsCard {
    @Input() item!: {
        id: number;
        title: string;
        description: string;
        url: string;
    }
}
