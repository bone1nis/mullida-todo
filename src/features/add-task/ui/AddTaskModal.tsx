import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { backdropVariants, modalVariants } from "../../../shared/animationVariants";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newTask: { title: string; description?: string }) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTitle("");
      setDescription("");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ title, description });
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
            <h2 className="text-xl mb-4">Добавить задачу</h2>
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
                  className="px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white text-sm transition-colors"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded border border-black bg-black text-white hover:bg-white hover:text-black text-sm transition-colors"
                >
                  Добавить
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddTaskModal;