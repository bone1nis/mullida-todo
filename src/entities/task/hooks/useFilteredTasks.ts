import { useMemo } from "react";

import { useTaskStore } from "../model/useTaskStore";
import type { Task } from "../model/types";

export const useFilteredTasks = (): Task[] => {
    const tasks = useTaskStore((state) => state.tasks);
    const filter = useTaskStore((state) => state.filter);
    const sortBy = useTaskStore((state) => state.sortBy);

    const filteredTasks = useMemo(() => {
        let result = tasks
            .filter((task) => {
                if (filter.status === "completed") return task.completed;
                if (filter.status === "notCompleted") return !task.completed;
                return true;
            })
            .filter((task) =>
                task.title.toLowerCase().includes(filter.search.toLowerCase())
            );

        result = result.sort((a, b) => {
            if (sortBy === "createdAt") {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }
            if (sortBy === "title") {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });

        return result;
    }, [tasks, filter, sortBy]);

    return filteredTasks;
};