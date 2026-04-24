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
        ["apple", ["#dbeafe", "#2563eb"]],
        ["network", ["#dbeafe", "#2563eb"]],
        ["cube", ["#dbeafe", "#2563eb"]],
    ]);

    size: number = 30;

    get iconConfig(): [string, string] {
        if (this.hovered && this.icons.has(this.icon)) {
            let bg: string = this.icons.get(this.icon)![1];
            let fill: string = "white";

            return [bg, fill];
        }
        else if (this.icons.has(this.icon)) {
            return this.icons.get(this.icon)!;
        }
        else {
            return ['transparent', 'black']
        }
    }

}
