import { useState, useEffect } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
// import data from "../helper/starterData";

const Home = () => {
  //! Get tasks data from localStorage if they exist otherwise assing empty array to the tasks state
  const [tasks, setTasks] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    return saved || [];
  });

  //! When tasks is updated, Refresh tasks in the localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header tasks={tasks} setTasks={setTasks} />
      {tasks.length > 0 ? (
        <ShowTasks tasks={tasks} setTasks={setTasks} />
      ) : (
        <p style={{ textAlign: "center" }}>NO TASK TO SHOW</p>
      )}
    </div>
  );
};

export default Home;
