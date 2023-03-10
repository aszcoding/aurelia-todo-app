interface Todo {
    description: string;
    done: boolean;
  }
  
  export class MyApp {
    heading = "Let's Get To Work!";
    todos: Todo[] = [];
    todoDescription = '';
  
    addTodo() {
      if (this.todoDescription) {
        this.todos.push({
          description: this.todoDescription,
          done: false
        });
        this.todoDescription = '';
      }
    }
  
    removeTodo(todo) {
      const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    }
  }
  