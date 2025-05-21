import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import type { Task } from "../../../entities/task";
import { backdropVariants, modalVariants } from "../../../shared/animationVariants";

interface EditTaskModalProps {
    task: Task;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedTask: Partial<Task>) => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
    task,
    isOpen,
    onClose,
    onSave,
}) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || "");

    useEffect(() => {
        if (isOpen) {
            setTitle(task.title);
            setDescription(task.description || "");
        }
    }, [isOpen, task]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ title, description });
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded border border-black p-6 w-full max-w-md"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl mb-4">Редактировать задачу</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full mb-4 p-2 border rounded"
                                placeholder="Название задачи"
                                required
                            />
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full mb-4 p-2 border rounded"
                                placeholder="Описание задачи"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white text-sm transition-colors"
                                >
                                    Отмена
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-1 rounded border border-black bg-black text-white hover:bg-black hover:text-black dark:hover:bg-white dark:hover:text-black text-sm transition-colors"
                                >
                                    Сохранить
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EditTaskModal;