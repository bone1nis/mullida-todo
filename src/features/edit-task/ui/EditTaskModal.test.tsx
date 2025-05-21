import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import EditTaskModal from "./EditTaskModal";
import type { Task } from '../../../entities/task';

const mockTask: Task = {
    id: "task-1",
    title: "Test Task",
    description: "Test description",
    completed: false,
    createdAt: new Date("2025-05-18T10:00:00").toISOString(),
};

describe("EditTaskModal", () => {
    const setup = (isOpen = true, task = mockTask) => {
        const onSave = jest.fn();
        const onClose = jest.fn();
        render(
            <EditTaskModal
                task={task}
                isOpen={isOpen}
                onSave={onSave}
                onClose={onClose}
            />
        );
        return { onSave, onClose };
    };

    test("рендерит заголовок, поля и кнопки", () => {
        setup();
        expect(screen.getByText(/редактировать задачу/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/название задачи/i)).toHaveValue(mockTask.title);
        expect(screen.getByPlaceholderText(/описание задачи/i)).toHaveValue(mockTask.description);
        expect(screen.getByText(/отмена/i)).toBeInTheDocument();
        expect(screen.getByText(/сохранить/i)).toBeInTheDocument();
    });

    test("вызывает onClose при клике по фону", async () => {
        const { onClose } = setup();
        const backdrop = screen.getByText(/редактировать задачу/i).closest("div")!.parentElement!;
        await userEvent.click(backdrop);
        expect(onClose).toHaveBeenCalled();
    });

    test("не вызывает onClose при клике по модалке", async () => {
        const { onClose } = setup();
        const modal = screen.getByText(/редактировать задачу/i).closest("div")!;
        await userEvent.click(modal);
        expect(onClose).not.toHaveBeenCalled();
    });

    test("отправляет обновлённые данные при сабмите", async () => {
        const { onSave, onClose } = setup();

        const titleInput = screen.getByPlaceholderText(/название задачи/i);
        const descriptionTextarea = screen.getByPlaceholderText(/описание задачи/i);
        const saveButton = screen.getByText(/сохранить/i);

        await userEvent.clear(titleInput);
        await userEvent.type(titleInput, "Обновлённая задача");

        await userEvent.clear(descriptionTextarea);
        await userEvent.type(descriptionTextarea, "Новое описание");

        await userEvent.click(saveButton);

        expect(onSave).toHaveBeenCalledWith({ title: "Обновлённая задача", description: "Новое описание" });
        expect(onClose).toHaveBeenCalled();
    });

    test("не отображается, если isOpen = false", () => {
        setup(false);
        expect(screen.queryByText(/редактировать задачу/i)).not.toBeInTheDocument();
    });
});