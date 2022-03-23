import { useState } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import data from "../helper/starterData";

const Home = () => {
  const [tasks, setTasks] = useState(data);

  const addTask = (newTask) => {
    const id = new Date().getTime();
    const addNewTask = { id: id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <Header addTask={addTask} />
      {tasks.length > 0 ? (
        <ShowTasks
          tasks={tasks}
          toggleDone={toggleDone}
          deleteTask={deleteTask}
        />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
};

export default Home;
