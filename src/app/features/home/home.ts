import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Labs } from './labs/labs';
import { News } from './news/news';
import { Team } from './team/team';
import { Help } from './help/help';

@Component({
    selector: 'app-home',
    imports: [
        Hero,
        Labs,
        News,
        Team,
        Help
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    standalone: true
})

export class Home {}
