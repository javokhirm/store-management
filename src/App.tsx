import TaskList from "./components/TaskList";
// import { useStore } from "./zustand";
import AddTaskForm from "./components/AddTaskForm";
// import { useTaskContext } from "./context/TaskContext";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState, useAppDispatch } from "./redux/store";
// import { addTask, deleteTask, toggleTask } from "./redux/taskSlice";
import { useTaskStore } from "./zustand";
// import { useTaskContext } from "./context/TaskContext";

const App = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const addTask = useTaskStore((state) => state.addTask);

  return (
    <div className="min-h-screen bg-gray-100 p-4 w-full">
      <div className="max-w-md mx-auto bg-white shadow p-4 rounded">
        <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
        <AddTaskForm addTask={addTask} />
        <TaskList tasks={tasks} toggleTaskCompletion={toggleTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
};

export default App;
