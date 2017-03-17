import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    // TypeScript can infer types when a value is assigned to a property.
    emoji = ['🎉', '😍', '😜', '👍', '😀', '😃', '😄', '😁', '😆', '😅', '😂'];
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }
}