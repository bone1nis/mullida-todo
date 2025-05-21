import { useState } from "react";

import { nanoid } from "nanoid";

import { AddTaskButton, AddTaskModal } from "../../features/add-task";
import { TaskFilter } from "../../features/task-filter";
import { TaskSort } from "../../features/task-sort";

import { useTaskStore, type Task } from "../../entities/task";

const TaskActions: React.FC = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  const addTask = useTaskStore((state) => state.addTask);

  const handleAdd = (newTask: Pick<Task, "title" | "description">) => {
    const task: Task = {
      id: nanoid(),
      completed: false,
      createdAt: new Date().toISOString(),
      ...newTask,
    };
    addTask(task);
    setIsAddOpen(false);
  };

  return (
    <div>
      <TaskFilter />
      <TaskSort />

      <div className="flex justify-end mb-4">
        <AddTaskButton onClick={() => setIsAddOpen(true)} />

        <AddTaskModal
          isOpen={isAddOpen}
          onClose={() => setIsAddOpen(false)}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
};

export default TaskActions;
