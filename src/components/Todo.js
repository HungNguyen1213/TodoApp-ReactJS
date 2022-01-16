import { useStore, actions } from "../store";

function Todo({ todo }) {
  const context = useStore();
  const dispatch = context[1];
  return (
    <div>
      <li>{todo.text}</li>
      <button onClick={() => dispatch(actions.setTodoCompleted(todo.id))}>
        Done
      </button>
      <button onClick={() => dispatch(actions.deleteTodo(todo.id))}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
