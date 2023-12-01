// import { legacy_createStore as createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

//save to local storage
// const saveToLocalStorage = (state) => {
//   window.localStorage.setItem("ToDos", JSON.stringify(state));
//   return state;
// };

// const reducer = (state = JSON.parse(window.localStorage.getItem("ToDos")) || [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return saveToLocalStorage([{ text: action.payload, id: Date.now() }, ...state]);
//     case deleteToDo.type:
//       return saveToLocalStorage(state.filter((toDo) => toDo.id !== action.payload));
//     default:
//       return state;
//   }
// };

// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    },
  },
});

// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
