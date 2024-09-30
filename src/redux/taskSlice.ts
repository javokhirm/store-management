import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/task";

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({ id: Date.now(), title: action.payload, completed: false });
    },
    updateTask: (state, action: PayloadAction<{ id: number; title: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.title = action.payload.title;
      }
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, toggleTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
