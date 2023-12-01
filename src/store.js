import { legacy_createStore as createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

//save to local storage
const saveToLocalStorage = (state) => {
  window.localStorage.setItem("ToDos", JSON.stringify(state));
  return state;
};

const reducer = (state = JSON.parse(window.localStorage.getItem("ToDos")) || [], action) => {
  switch (action.type) {
    case ADD:
      return saveToLocalStorage([{ text: action.text, id: Date.now() }, ...state]);
    case DELETE:
      return saveToLocalStorage(state.filter((toDo) => toDo.id !== action.id));
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
