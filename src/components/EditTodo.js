import { useState } from "react";

export default function EditTodo({ todo, saveEditTodo, cancelEditTodo }) {
  // récupération des méthodes et d'une todo en props

  // utilisation de useState avec en paramètre le contenu textuel de la todo
  const [contentInput, setContentInput] = useState(todo.content);

  // méthode qui récupére chaque modification dans l'input et qui modifie instantanément
  // notre variable contentInput
  // On s'aide pour cela d'event (e)
  function handleChange(e) {
    const value = e.target.value;
    console.log(value);
    setContentInput(value);
  }

  // pareillement que dans AddTodo les 2 méthodes ci dessous permettent de valider la modification
  // soit avec le bouton soit avec la touche entrée
  const handleClick = () => {
    if (contentInput.length) {
      saveEditTodo(todo.id, contentInput);
    }
  };

  const handleKeyDown = (e) => {
    // console.log(e);
    if (e.code === "Enter" && contentInput.length) {
      saveEditTodo(todo.id, contentInput);
    }
  };

  // rendu du composant (l'input avec comme contenu le texte de la todo
  // ainsi que 2 boutons pour annuler le fait d'éditer avec todoEdit ainsi que
  // un bouton pour valider la modification)
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={contentInput}
        className="mr20 flex-fill"
        placeholder="Ajouter une todo"
      />
      <button
        onClick={() => cancelEditTodo(todo.id)}
        className="btn btn-primary mr10"
      >
        Annuler
      </button>
      <button onClick={handleClick} className="btn btn-primary">
        Sauvegarder
      </button>
    </div>
  );
}
