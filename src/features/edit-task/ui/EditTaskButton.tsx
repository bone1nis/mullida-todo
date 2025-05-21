interface EditTaskButtonProps {
    onClick: () => void;
}

const EditTaskButton: React.FC<EditTaskButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white text-sm transition-colors"
        aria-label="Редактировать задачу"
    >
        Редактировать
    </button>
);

export default EditTaskButton;