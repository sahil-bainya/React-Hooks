import { useReducer, useState } from "react";
import SingleTodo from "./SingleTodo.jsx";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  DO_THAT: "do-that",
  DELETE: "delete",
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DO_THAT:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <SingleTodo todo={todo} dispatch={dispatch} />
        </div>
      ))}
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <button>Add</button>
      </form>
    </>
  );
}
