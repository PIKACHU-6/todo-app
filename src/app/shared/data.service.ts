import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[]=[
    new Todo('This is a test!'),
    new Todo('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
  ]

  constructor() { }

  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  updateTodo(index: number, updateTodo:Todo){
    this.todos[index]=updateTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index,1);
  }
}
