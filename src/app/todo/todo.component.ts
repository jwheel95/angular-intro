import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  todos: object[] = [
    { title: 'Clean the kitchen', isCompleted: false, isDeleted: false },
    { title: 'Mow the lawn', isCompleted: false, isDeleted: false },
    { title: 'Clean the gutters', isCompleted: false, isDeleted: false },
    { title: 'Take out the trash', isCompleted: false, isDeleted: false }
  ];

  toggleCompleted(todo): void { todo.isCompleted = !todo.isCompleted; }

  toggleDeleted(todo): void { todo.isDeleted = !todo.isDeleted; }

  ngOnInit() {
  }

}
