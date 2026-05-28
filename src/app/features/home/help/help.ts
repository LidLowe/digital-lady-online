import { Component } from '@angular/core';

@Component({
    selector: 'app-help',
    imports: [],
    templateUrl: './help.html',
    styleUrl: './help.css',
    standalone: true
})
export class Help {
    openLink() {
        window.open('https://form.jotform.com/260971299889077', '_blank');
    }
}
