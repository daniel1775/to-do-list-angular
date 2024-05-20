import { Component, signal, } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css',
})
export class HomeComponent {
	tasks = signal(['Task 1', 'Task 2', 'Task 3', 'Task 4']);

	handleAddTask(event: Event) {
		const input = event.target as HTMLInputElement;
		this.tasks.update((prev) => [...prev, input.value]);
	}
}
