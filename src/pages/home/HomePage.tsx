import TasksList from "../../widgets/tasks-list/TasksList";
import TaskActions from "../../widgets/task-actions/TaskActions";

const HomePage: React.FC = () => {

    return (
        <>
            <TaskActions />
            <TasksList />
        </>
    );
};

export default HomePage;