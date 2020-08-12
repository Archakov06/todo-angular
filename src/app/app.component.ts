import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class AppComponent {
  tasks = [
    {
      text: 'Изучить VueJS',
      completed: true,
    },
    {
      text: 'Разработать ToDo на VueJS',
      completed: false,
    },
  ];

  onToggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
