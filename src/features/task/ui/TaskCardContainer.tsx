import { useState } from "react";

import { RemoveTaskButton } from "../../remove-task";
import { EditTaskButton, EditTaskModal } from "../../edit-task";
import { ToggleTaskStatusButton } from "../../toggle-task-status";

import { TaskCard } from "../../../entities/task";
import type { EditTaskPayload, Task } from "../../../entities/task";

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