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
      <label className="mr-2 font-medium">Сортировка:</label>
      <select
        value={sortBy}
        onChange={handleChange}
        className="border rounded px-2 py-1"
      >
        <option value="createdAt">По дате создания</option>
        <option value="title">По названию</option>
      </select>
    </div>
  );
};

export default TaskSort;