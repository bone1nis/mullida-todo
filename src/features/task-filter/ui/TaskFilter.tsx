import { useTaskStore } from "../../../entities/task";
import type { TaskFiltersStatus } from "../../../entities/task";

const TaskFilter: React.FC = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as TaskFiltersStatus;
    setFilter({ ...filter, status: newStatus });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setFilter({ ...filter, search: newSearch });
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 items-start sm:items-center mb-4">
      <select
        value={filter.status}
        onChange={handleStatusChange}
        className="border rounded px-2 py-1 w-full sm:w-auto"
      >
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="notCompleted">Не выполненные</option>
      </select>

      <input
        type="text"
        placeholder="Поиск по названию..."
        value={filter.search}
        onChange={handleSearchChange}
        className="border rounded px-2 py-1 w-full sm:flex-grow"
      />
    </div>
  );
};

export default TaskFilter;