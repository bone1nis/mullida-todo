import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTaskModal from "./AddTaskModal";

describe("AddTaskModal", () => {
    const setup = () => {
        const onAdd = jest.fn();
        const onClose = jest.fn();
        render(<AddTaskModal isOpen={true} onAdd={onAdd} onClose={onClose} />);
        return { onAdd, onClose };
    };

    test("рендерит заголовок и поля", () => {
        setup();
        expect(screen.getByText(/добавить задачу/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/название задачи/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/описание задачи/i)).toBeInTheDocument();
    });

    test("вызывает onClose при клике по фону", async () => {
        const { onClose } = setup();
        const user = userEvent.setup();

        const backdrop = screen.getByText(/добавить задачу/i).closest("div")!.parentElement!;
        await user.click(backdrop);

        expect(onClose).toHaveBeenCalled();
    });

    test("не вызывает onClose при клике по самой модалке", async () => {
        const { onClose } = setup();
        const user = userEvent.setup();

        const modal = screen.getByText(/добавить задачу/i).closest("div")!;
        await user.click(modal);

        expect(onClose).not.toHaveBeenCalled();
    });

    test("отправляет данные при сабмите", async () => {
        const { onAdd, onClose } = setup();
        const user = userEvent.setup();

        const titleInput = screen.getByPlaceholderText(/название задачи/i);
        const descriptionInput = screen.getByPlaceholderText(/описание задачи/i);
        const addButton = screen.getByText(/добавить/i, { selector: "button" });

        await user.type(titleInput, "Новая задача");
        await user.type(descriptionInput, "Описание");
        await user.click(addButton);

        expect(onAdd).toHaveBeenCalledWith({ title: "Новая задача", description: "Описание" });
        expect(onClose).toHaveBeenCalled();
    });

    test("не отображается, если isOpen = false", () => {
        const onAdd = jest.fn();
        const onClose = jest.fn();
        render(<AddTaskModal isOpen={false} onAdd={onAdd} onClose={onClose} />);
        expect(screen.queryByText(/добавить задачу/i)).not.toBeInTheDocument();
    });
});