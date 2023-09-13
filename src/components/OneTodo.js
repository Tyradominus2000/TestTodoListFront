export default function OneTodo({ todo, deleteTodo, todoDone, todoEdit }) {
  return (
    <li className="d-flex justify-content-center align-items-center p10 mb10">
      <span className="flex-fill mr10">
        {todo.content}
        {todo.done ? "( ✔️ )" : ""}
      </span>
      <button
        onClick={() => todoDone(todo.id)}
        className="btn btn-primary mr10"
      >
        {todo.done ? "Cancel" : "Validate"}
      </button>
      <button
        onClick={() => todoEdit(todo.id)}
        className="btn btn-primary mr10"
      >
        Update
      </button>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-reverse-primary"
      >
        Delete
      </button>
    </li>
  );
}
