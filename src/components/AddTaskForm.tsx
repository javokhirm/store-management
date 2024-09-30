import React, { useState } from "react";

interface AddTaskFormProps {
  addTask: (title: string) => void;
}

const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-l p-2 flex-1"
        placeholder="Add a new task"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
