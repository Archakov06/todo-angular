import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() text: string;
  @Input() completed: boolean;
  @Input() index: number;
  @Output() onToggleCompleted = new EventEmitter<number>();

  toggleCompleted() {
    this.onToggleCompleted.emit(this.index);
  }

  constructor() {}

  ngOnInit(): void {}
}
