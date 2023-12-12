/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  
  add(todo) {
    this.todos.push(todo);
    return this.todos;
  }

  remove(index) {
    if (index >= 0 && index <= this.todos.length - 1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }

  update(index, updatedTodo) {
    if (index >= 0 && index <= this.todos.length - 1) {
      this.todos[index] = updatedTodo;
    }
    return this.todos;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo <= this.todos.length - 1) {
      return this.todos[indexOfTodo];
    }
    return null;
  }

  clear() {
    this.todos = [];
    return this.todos;
  }
}

module.exports = Todo;
