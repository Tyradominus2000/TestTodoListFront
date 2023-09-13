import EditTodo from "./EditTodo";
import OneTodo from "./OneTodo";

// Ce composant récupère toutes les méthodes et les dispatchent à l'édition ou l'affichage
// selon la valeur du booléen edit
// si ce dernier est true il affiche le composant EditTodo
// sinon il mappe sur le tableau de todolist et affiche chaque todo grace au composant OneTodo
// Nous utilisons une double ternaire imbriquée
// la première permettant d'afficher un message si notre liste de todo est vide
// toujours avoir un feedback pour améliorer l'expérience utilisateur
export default function TodoList({
  todolist,
  deleteTodo,
  todoDone,
  todoEdit,
  saveEditTodo,
}) {
  return todolist.length ? (
    <ul>
      {todolist.map((todo) =>
        todo.edit ? (
          <EditTodo
            todo={todo}
            saveEditTodo={saveEditTodo}
            cancelEditTodo={todoEdit}
          />
        ) : (
          <OneTodo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            todoDone={todoDone}
            todoEdit={todoEdit}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}
