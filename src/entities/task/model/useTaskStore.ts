import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { TaskState } from "./types";

export const useTaskStore = create<TaskState>()(
    persist(
        (set) => ({
            tasks: [
                {
                    id: "1",
                    title: "Купить продукты",
                    description: "Молоко, хлеб, яйца, сыр",
                    completed: false,
                    createdAt: new Date("2025-05-18T10:00:00").toISOString(),
                },
                {
                    id: "2",
                    title: "Сделать домашнее задание",
                    description: "Раздел по математике и физике",
                    completed: true,
                    createdAt: new Date("2025-05-17T14:30:00").toISOString(),
                },
                {
                    id: "3",
                    title: "Позвонить бабушке",
                    description: "",
                    completed: false,
                    createdAt: new Date("2025-05-19T09:15:00").toISOString(),
                },
                {
                    id: "4",
                    title: "Разобрать документы",
                    description: "Проверить и отсортировать по папкам",
                    completed: false,
                    createdAt: new Date("2025-05-15T18:45:00").toISOString(),
                },
            ],
            filter: { status: "all", search: "" },
            sortBy: "title",
            addTask: (task) =>
                set((state) => ({ tasks: [...state.tasks, task] })),
            removeTask: (id) =>
                set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
            toggleStatus: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                })),
            editTask: (updatedTask) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
                    ),
                })),
            setFilter: (filter) => set({ filter }),
            setSortBy: (sortBy) => set({ sortBy }),
        }),
        {
            name: "task-storage",
            partialize: (state) => ({
                tasks: state.tasks,
                filter: state.filter,
                sortBy: state.sortBy
            }),
        }
    )
);