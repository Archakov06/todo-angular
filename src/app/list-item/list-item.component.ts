import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITaskModel} from '../task.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent   {

  @Input() tasks: [ITaskModel];
  @Output() removeTaskItemIndex: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  toggleCompleted(index): void {
    this.tasks[index].completed = !this.tasks[index].completed;
    console.log(this.tasks[index].completed);
  }

  removeTask(index: number): void {
    this.removeTaskItemIndex.emit(index);
  }
}
