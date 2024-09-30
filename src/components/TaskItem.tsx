import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem = ({ task, toggleTaskCompletion, deleteTask }: TaskItemProps) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <div className={`flex-1 ${task.completed ? "line-through" : ""}`}>{task.title}</div>
      <button onClick={() => toggleTaskCompletion(task.id)} className="mr-2">
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTask(task.id)} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
