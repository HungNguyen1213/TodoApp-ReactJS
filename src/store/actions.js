import {
  SET_TODO_INPUT,
  ADD_TODO,
  SET_TODO_COMPLETED,
  DELETE_TODO,
  SET_FILTER_CONDITION,
  SET_FILTER_TODO,
} from "./constants";

export function setTodoInput(payload) {
  return {
    type: SET_TODO_INPUT,
    payload,
  };
}

export function addTodo() {
  return {
    type: ADD_TODO,
  };
}

export function setTodoCompleted(payload) {
  return {
    type: SET_TODO_COMPLETED,
    payload,
  };
}

export function deleteTodo(payload) {
  return {
    type: DELETE_TODO,
    payload,
  };
}

export function setFilterCondition(payload) {
  return {
    type: SET_FILTER_CONDITION,
    payload,
  };
}

export function setFilterTodo() {
  return {
    type: SET_FILTER_TODO,
  };
}
