import { useTaskStore } from "../../../entities/task";
import type { SortBy } from "../../../entities/task";

const TaskSort: React.FC = () => {
  const sortBy = useTaskStore((state) => state.sortBy);
  const setSortBy = useTaskStore((state) => state.setSortBy);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortBy);
  };

  return (
    <div className="mb-4">
      <label className="mr-2 font-medium text-black dark:text-white">Сортировка:</label>
      <select
        value={sortBy}
        onChange={handleChange}
        className="border rounded px-2 py-1 bg-white text-black dark:white dark:text-dark"
      >
        <option value="createdAt">По дате создания</option>
        <option value="title">По названию</option>
      </select>
    </div>
  );
};

export default TaskSort;