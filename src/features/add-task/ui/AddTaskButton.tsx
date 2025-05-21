interface AddTaskButtonProps {
    onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white text-sm transition-colors"
        aria-label="Добавить задачу"
    >
        Добавить задачу
    </button>
);

export default AddTaskButton;
