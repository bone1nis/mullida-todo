import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { TaskCardContainer } from "../../features/task";

const mockTask = {
  id: "task-1",
  title: "Test Task",
  description: "Test description",
  completed: false,
  createdAt: new Date("2025-05-18T10:00:00").toISOString(),
};

describe("TaskCardContainer", () => {
  const onRemove = jest.fn();
  const onEdit = jest.fn();
  const onToggleStatus = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <TaskCardContainer
        task={mockTask}
        onRemove={onRemove}
        onEdit={onEdit}
        onToggleStatus={onToggleStatus}
      />
    );
  });

  test("рендерит TaskCard с данными задачи", () => {
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });
});
