import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-labs-card',
  imports: [],
  templateUrl: './labs-card.html',
  styleUrl: './labs-card.css',
})

export class LabsCard {
    @Input() item!: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
}
