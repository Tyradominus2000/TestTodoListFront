import styles from "./App.module.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {
    async function getTodoList() {
      try {
        const response = await fetch("http://localhost:8000/getTodos");
        if (response.ok) {
          const todos = await response.json();
          console.log(todos);
          setTodolist(todos);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getTodoList();
  }, []);

  const addTodo = (todo) => {
    console.log(todo);
    setTodolist([...todolist, todo]);
  };

  function todoDone(idTodo) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === idTodo
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  function todoEdit(idEditTodo) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === idEditTodo
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }

  function saveEditTodo(idEdit, newContent) {
    setTodolist(
      todolist.map((todo) =>
        todo.id === idEdit
          ? {
              ...todo,
              content: newContent,
              edit: false,
            }
          : todo
      )
    );
  }

  function deleteTodo(idParam) {
    console.log(idParam);
    setTodolist(todolist.filter((todo) => todo.id !== idParam));
  }

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <div className="card p20">
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todolist={todolist}
          saveEditTodo={saveEditTodo}
          deleteTodo={deleteTodo}
          todoEdit={todoEdit}
          todoDone={todoDone}
        />
      </div>
    </div>
  );
}

export default App;
