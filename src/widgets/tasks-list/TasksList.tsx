import { TaskCardContainer } from "../../features/task";

import { useTaskStore } from "../../entities/task";
import { useFilteredTasks } from "../../entities/task";

import { motion, AnimatePresence } from "motion/react"

const TasksList = () => {
    const filteredTasks = useFilteredTasks();

    const removeTask = useTaskStore((state) => state.removeTask);
    const editTask = useTaskStore((state) => state.editTask);
    const toggleTaskStatus = useTaskStore((state) => state.toggleStatus);

    if (!filteredTasks.length) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-4">
                Задачи не найдены.
            </div>
        );
    }

    return (
        <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {filteredTasks.map((task) => (
                    <motion.div
                        key={task.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9, y: -5 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TaskCardContainer
                            task={task}
                            onRemove={removeTask}
                            onEdit={editTask}
                            onToggleStatus={toggleTaskStatus}
                        />
                    </motion.div>
                ))}
            </div>
        </AnimatePresence>
    );
};

export default TasksList;