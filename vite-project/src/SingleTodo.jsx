import { ACTIONS } from "./Todo.jsx";
export default function SingleTodo({ todo, dispatch }) {
  return (
    <>
      <p>{todo.id}</p>
      <p>{todo.name}</p>
      {todo.complete ? (
        <p>completed</p>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DO_THAT, payload: { id: todo.id } })
          }
        >
          DO it
        </button>
      )}
      <br />
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
}
