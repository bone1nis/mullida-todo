import { useState } from "react";

import { RemoveTaskButton } from "../../features/remove-task";
import { EditTaskButton, EditTaskModal } from "../../features/edit-task";
import { ToggleTaskStatusButton } from "../../features/toggle-task-status";

import { TaskCard } from "../../entities/task";
import type { Task, EditTaskPayload } from "../../entities/task";

interface TaskCardContainerProps {
    task: Task;
    onRemove: (id: string) => void;
    onEdit: (task: EditTaskPayload) => void;
    onToggleStatus: (id: string) => void;
}

const TaskCardContainer: React.FC<TaskCardContainerProps> = ({
    task,
    onRemove,
    onEdit,
    onToggleStatus,
}) => {

    const [isEditOpen, setIsEditOpen] = useState(false);

    const openEditModal = () => setIsEditOpen(true);
    const closeEditModal = () => setIsEditOpen(false);

    const handleSave = (updatedFields: Partial<Task>) => {
        onEdit({ id: task.id, ...updatedFields });
    };

    const handleRemove = () => {
        onRemove(task.id);
    };

    const handleToggleStatus = () => {
        onToggleStatus(task.id);
    }
    return (
        <div>
            <TaskCard task={task} />
            <div className="flex justify-end space-x-2 mt-2 h-12">

                <EditTaskButton onClick={openEditModal} />
                <ToggleTaskStatusButton
                    completed={task.completed}
                    onToggleStatus={handleToggleStatus}
                />
                <RemoveTaskButton onRemove={handleRemove} />
            </div>

            <EditTaskModal
                task={task}
                isOpen={isEditOpen}
                onClose={closeEditModal}
                onSave={handleSave}
            />
        </div>
    );
};

export default TaskCardContainer;