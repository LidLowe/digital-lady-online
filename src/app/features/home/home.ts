import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Labs } from './labs/labs';
import { News } from './news/news';
import { Team } from './team/team';

@Component({
    selector: 'app-home',
    imports: [
        Hero,
        Labs,
        News,
        Team
    ],
    templateUrl: './home.html',
    styleUrl: './home.css',
    standalone: true
})
export class Home {
    openLink() {
        window.open('https://form.jotform.com/260971299889077', '_blank');
    }
}
