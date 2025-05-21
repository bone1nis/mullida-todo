interface RemoveTaskButtonProps {
    onRemove: () => void;
    disabled?: boolean;
}

const RemoveTaskButton: React.FC<RemoveTaskButtonProps> = ({ onRemove, disabled }) => {
    return (
        <button
            onClick={onRemove}
            disabled={disabled}
            className="px-3 py-1 rounded border border-black bg-white text-black hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white text-sm transition-colors"
            title="Удалить задачу"
            aria-label="Удалить задачу"
        >
            Удалить
        </button>
    );
};

export default RemoveTaskButton;