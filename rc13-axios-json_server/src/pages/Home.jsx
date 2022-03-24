import { useState, useEffect } from "react";
import Header from "../components/Header";
import ShowTasks from "../components/ShowTasks";
import axios from "axios";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const baseURL = "http://localhost:5000/tasks";

  //* CRUD

  //! READ (GET)
  const fetchTasks = async () => {
    const { data } = await axios.get(baseURL);
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //! CREATE (POST)
  const addTask = async (newTask) => {
    await axios.post(baseURL, newTask);
    fetchTasks();
  };

  //! UPDATE (PUT OR PATCH)
  //?  PATCH: Partial Update
  //? PUT: Whole Update

  const toggleDone = async (id) => {
    const toggledDone = tasks
      .filter((task) => task.id === id)
      .map((task) => ({ isDone: !task.isDone }));

    await axios.patch(`${baseURL}/${id}`, toggledDone[0]);
    fetchTasks();
  };

  //! DELETE
  const deleteTask = async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    fetchTasks();
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
