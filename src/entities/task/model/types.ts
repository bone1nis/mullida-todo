export type Task = {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: string;
};


export type EditTaskPayload = { id: string } & Partial<Omit<Task, 'id'>>;

export type TaskFiltersStatus = 'all' | 'completed' | 'notCompleted';
export type TaskFilters = {
    status: TaskFiltersStatus;
    search: string;
};

export type SortBy = "createdAt" | "title";

export type TaskState = {
    tasks: Task[];
    filter: TaskFilters;
    sortBy: SortBy;
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    toggleStatus: (id: string) => void;
    editTask: (updatedTask: EditTaskPayload) => void;
    setFilter: (filter: { status: TaskState['filter']['status']; search: string }) => void;
    setSortBy: (sortBy: SortBy) => void;
};