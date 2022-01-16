import { useEffect } from "react";

import { useStore, actions } from "../store";
import Todo from "./Todo";

function ListTodo() {
  const [state, dispatch] = useStore();

  useEffect(
    () => dispatch(actions.setFilterTodo()),
    [state.filterCondition, state.todos, dispatch]
  );

  return (
    <ul>
      {state.filterTodo.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default ListTodo;
