// import { createSlice } from "@reduxjs/toolkit";

// const tasksInitialState = [];

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: tasksInitialState,
//   reducers: {
//     addTask(state, action) {
//       state.push(action.payload);
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//     toggleCompleted(state, action) {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//           break;
//         }
//       }
//     },
//   },
// });

//______________________________________________

// const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// const tasksReducer = tasksSlice.reducer;

// const initialState = {};

// export const contactsReducer = (state = initialState, action) => {
//   return state;
// };
