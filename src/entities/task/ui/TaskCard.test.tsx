import '@testing-library/jest-dom';
import { render, screen, cleanup } from "@testing-library/react";
import TaskCard from './TaskCard';
import type { Task } from '../model/types';

const mockTask: Task = {
    id: "task-1",
    title: "Test Task",
    description: "Test description",
    completed: false,
    createdAt: new Date("2025-05-18T10:00:00").toISOString(),
};

describe("TaskCard", () => {
    afterEach(() => {
        jest.clearAllMocks();
        cleanup();
    });

    test("рендерит заголовок задачи", () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText("Test Task")).toBeInTheDocument();
    });

    test("рендерит описание задачи", () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText("Test description")).toBeInTheDocument();
    });

    test("рендерит статус задачи как 'Не выполнена'", () => {
        render(<TaskCard task={mockTask} />);
        expect(screen.getByText(/Статус:/)).toBeInTheDocument();
        expect(screen.getByText("Не выполнена")).toBeInTheDocument();
    });

    test("рендерит статус как 'Выполнена' при completed = true", () => {
        render(<TaskCard task={{ ...mockTask, completed: true }} />);
        expect(screen.getByText("Выполнена")).toBeInTheDocument();
    });

    test("не отображает описание, если оно отсутствует", () => {
        render(<TaskCard task={{ ...mockTask, description: "" }} />);
        expect(screen.queryByText("Test description")).not.toBeInTheDocument();
    });
});