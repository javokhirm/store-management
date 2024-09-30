import { create } from "zustand";
import { Task } from "../types/task";

type State = {
  tasks: Task[];
};

type Actions = {
  addTask: (title: string) => void;
  updateTask: (id: number, title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export const useTaskStore = create<State & Actions>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((prevState) => ({
      tasks: [...prevState.tasks, { id: Date.now(), title, completed: false }],
    })),
  updateTask: (id, title) =>
    set((state) => ({
      tasks: state.tasks.map((task) => (task.id === id ? { ...task, title } : task)),
    })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));
