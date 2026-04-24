import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-labs-icons',
    imports: [],
    template: `
        <div class="icon"  [style.--icon-hovered]="iconConfig[1]" [style.fill]="iconConfig[1]" >
            <svg [style.background]="iconConfig[0]" [style.height]="size + 'px'" [style.width]="size + 'px'" >
                <use [attr.href]="'#icon-' + icon"/>
            </svg>
        </div>
    `,
    styleUrls: ['./labs-icons.css'],
})

export class LabsIcons {
    @Input() icon!: string;

    icons = new Map<string, [string, string]>([
        ["android", ["#dcfce7", "#16a34a"]],
        ["apple", ["#dbeafe", "#2563eb"]],
        ["network", ["#dbeafe", "#2563eb"]],
        ["cube", ["#dbeafe", "#2563eb"]],
    ]);

    size: number = 60;

    get iconConfig(): [string, string] {
        if ([])
        return this.icons.get(this.icon) ?? ['transparent', 'black'];
    }
}
