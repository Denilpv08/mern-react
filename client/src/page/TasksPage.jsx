import { useEffect } from "react";
import TasksCard from "../components/TasksCard";
import { useTasks } from "../context/TaskProvider";
import Navbar from "../components/Navbar";

const TasksPage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0) return <h1>No Tasks yet</h1>;

    return tasks.map((task) => <TasksCard task={task} key={task.id} />);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-5xl text-white font-bold text-center">Task</h1>
      <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
    </div>
  );
};

export default TasksPage;
