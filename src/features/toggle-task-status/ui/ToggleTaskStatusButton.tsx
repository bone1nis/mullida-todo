interface ToggleTaskStatusButtonProps {
    completed: boolean;
    onToggleStatus: () => void;
    disabled?: boolean;
}

const ToggleTaskStatusButton: React.FC<ToggleTaskStatusButtonProps> = ({
    disabled,
    completed,
    onToggleStatus,
}) => {
    return (
        <button
            onClick={onToggleStatus}
            className="px-3 py-1 rounded border border-black bg-black text-white hover:bg-black hover:text-black dark:hover:bg-white dark:hover:text-black text-sm transition-colors"
            aria-pressed={completed}
            aria-label={completed ? "Отметить не выполненной" : "Отметить выполненной"}
            type="button"
            disabled={disabled}
        >
            {completed ? "Отметить не выполненной" : "Отметить выполненной"}
        </button>
    );
};

export default ToggleTaskStatusButton;