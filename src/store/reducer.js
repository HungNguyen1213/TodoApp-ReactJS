import {
  SET_TODO_INPUT,
  ADD_TODO,
  SET_TODO_COMPLETED,
  DELETE_TODO,
  SET_FILTER_CONDITION,
  SET_FILTER_TODO,
} from "./constants";

const initState = {
  todos: [],
  todoInput: "",
  filterCondition: "all",
  filterTodo: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT: {
      return {
        ...state,
        todoInput: action.payload,
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Math.floor(Math.random() * 1000),
            text: state.todoInput,
            completed: false,
          },
        ],
      };
    }
    case SET_TODO_COMPLETED: {
      let todos = [...state.todos];
      todos = todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    }
    case DELETE_TODO: {
      let todos = [...state.todos];
      todos = todos.filter((todo) => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todos,
      };
    }
    case SET_FILTER_CONDITION: {
      return {
        ...state,
        filterCondition: action.payload,
      };
    }
    case SET_FILTER_TODO: {
      let filterTodo = [...state.todos];
      switch (state.filterCondition) {
        case "completed":
          filterTodo = filterTodo.filter((todo) => {
            return todo.completed;
          });
          break;
        case "uncompleted":
          filterTodo = filterTodo.filter((todo) => {
            return !todo.completed;
          });
          break;
        default:
      }
      return {
        ...state,
        filterTodo,
      };
    }
    default:
      throw new Error("Invalid action");
  }
}

export { initState };
export default reducer;
