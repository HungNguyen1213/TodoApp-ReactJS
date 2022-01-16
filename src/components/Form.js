import { useRef } from "react";

import { useStore, actions } from "../store";

function Form() {
  const [state, dispatch] = useStore();
  const todoInput = state.todoInput;
  const input = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addTodo());
    dispatch(actions.setTodoInput(""));
    input.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={input}
        value={todoInput}
        type="text"
        placeholder="Enter todo..."
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button type="submit">Add</button>
      <select
        onChange={(e) => dispatch(actions.setFilterCondition(e.target.value))}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;
