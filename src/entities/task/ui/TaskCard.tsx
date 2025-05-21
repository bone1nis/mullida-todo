import type { Task } from "../model/types";

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="bg-white dark:bg-black shadow-md rounded-md p-4 mb-4 border border-gray-300 dark:border-gray-700 min-w-[280px] min-h-[150px] flex flex-col">
            <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {task.title}
                </h3>

                {task.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{task.description}</p>
                )}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mt-auto pt-2 border-t border-gray-200 dark:border-gray-800">
                <span>
                    Статус:{" "}
                    <span
                        className={`font-medium ${task.completed
                            ? "text-gray-800 dark:text-gray-200"
                            : "text-gray-500 dark:text-gray-500"
                            }`}
                    >
                        {task.completed ? "Выполнена" : "Не выполнена"}
                    </span>
                </span>

                <span>
                    Создана:{" "}
                    {new Date(task.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>
            </div>
        </div>
    );
};

export default TaskCard;