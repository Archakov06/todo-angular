import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ITaskModel} from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {
  form: FormGroup;
  newTaskCreate: ITaskModel[] = [
    {
      text: 'Изучить VueJS',
      completed: true,
    },
    {
      text: 'Разработать ToDo на VueJS',
      completed: false,
    },
  ];
  ngOnInit(): void {
     this.initForm();
  }

  initForm(): void {
     this.form = new FormGroup({
       input: new FormControl('', [])
     });
  }

  submit(): void {
     const task: ITaskModel = {
       text: this.form.get('input').value,
       completed: false,
     };
     this.newTaskCreate.push(task);
     this.form.reset();
   }

  removeTaskItem(item): void {
    this.newTaskCreate = this.newTaskCreate.filter( (task: ITaskModel, index) => {
      if (item !== index) {
        return task;
      }
    });
  }
}
