import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World!';
  age: number = 900000;
  isShown: string = "I am being shown";
  isNotShown: string = "I am not being shown";

  person: object = {
    name: "Joe",
    age: 23,
    course: "Angular"
  };

  people: object = [
    {
      name: "Joe",
      age: 23,
      course: "Angular"
    },
    {
      name: "DJ",
      age: 22,
      course: "Angular"
    },
    {
      name: "Jake",
      age: 25,
      course: "Angular"
    },
    {
      name: "Gabe",
      age: 25,
      course: "Angular"
    }
  ];

  colors: string[] = ['red', 'blue', 'green', 'yellow'];

  myFunction(shouldShow: boolean): string {
    return shouldShow ? this.isShown : this.isNotShown;
  }
}