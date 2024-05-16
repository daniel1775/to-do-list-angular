import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.sass',
})
export class LabsComponent {
  title = 'to-do-list-angular';
  tasks = ['Task 1', 'Task 2', 'Task 3'];
}
