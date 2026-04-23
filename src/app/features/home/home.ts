import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import {Labs} from './labs/labs';
import {News} from './news/news';
import {Team} from './team/team';

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
})
export class Home {
    openLink() {
        window.open('https://forms.gle/nXp3GsTqKLWKBsJR7', '_blank');
    }
}
