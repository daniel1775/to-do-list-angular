import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-labs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './labs.component.html',
    styleUrl: './labs.component.css',
})
export class LabsComponent {
    title = 'to-do-list-angular';
    tasks = ['Task 1', 'Task 2', 'Task 3'];
    isDisabled = false

    handleClick() {
        alert('Button clicked!')
    }
    handleDoubleClick() {
        alert('Button double clicked!')
    }
    handleInput(event: Event) {
        console.log((event.target as HTMLInputElement).value);
    }
    handleKeyDown(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement
        alert(`Keydown event!\n${input.value}`)
    }
    handleKeyDownMoreKey(event: Event) {
        const input = event.target as HTMLInputElement
        alert(`Keydown event!\n${input.value}`)
    }
}
