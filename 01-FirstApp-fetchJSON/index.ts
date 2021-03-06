import axios from "axios";

// API url address to fetch data
const url = "https://jsonplaceholder.typicode.com/todos/1";

// interface Todo: Used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Helper function
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

// Main Application
axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});
