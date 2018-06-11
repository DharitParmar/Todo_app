import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private archiveTodos = [];

  constructor(public http: Http) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos(){
    return this.todos;
  }

  getArchivedTodos(){
    return this.archiveTodos;
  }

  addTodo(todo){
    this.todos.push(todo);
  }

  // function removes todo from perticular index in 'todos' array
  archiveTodo(itemIndex){
    let todoTobeArchived = this.todos[itemIndex];
    this.todos.splice(itemIndex, 1);
    this.archiveTodos.push(todoTobeArchived);
  }

  // takes the position of a selected item and procide an editing 
  editTodo(todo, itemIndex){
    this.todos[itemIndex] = todo;

  }
}
