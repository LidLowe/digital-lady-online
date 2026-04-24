import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-labs-icons',
    imports: [],
    template: `
        <div class="icon" [style.background]="iconConfig[0]">
            <svg [style.fill]="iconConfig[1]"
                 [style.height]="size + 'px'"
                 [style.width]="size + 'px'" >
                <use [attr.href]="'#icon-' + icon"/>
            </svg>
        </div>
    `,
    styleUrls: ['./labs-icons.css'],
})

export class LabsIcons {
    @Input() icon!: string;
    @Input() hovered: boolean = false;

    icons = new Map<string, [string, string]>([
        ["android", ["#dcfce7", "#16a34a"]],
        ["apple", ["#f3f4f6", "#111827"]],
        ["network", ["#D0F6FF", "#02c8ff"]],
        ["cube", ["#e0e7ff", "#4f46e5"]],
    ]);

    size: number = 30;

    get iconConfig(): [string, string] {
        if (!this.hovered) {
            return this.icons.get(this.icon)!;
        }
        else {
            let bg: string = this.icons.get(this.icon)![1];
            let fill: string = "white";

            return [bg, fill];
        }
    }

}
