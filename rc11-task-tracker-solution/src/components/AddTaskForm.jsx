import { useState } from "react";

const AddTaskForm = ({ tasks, setTasks }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const addTask = (newTask) => {
    const id = new Date().getTime();
    const addNewTask = { id: id, ...newTask };
    setTasks([...tasks, addNewTask]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: text, day: day, isDone: false });
    setText("");
    setDay("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="text"
            id="task"
            required
            placeholder="Add Task"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time </label>
          <input
            type="date"
            name="day"
            id="day"
            required
            placeholder="Day & Time"
            value={day}
            onChange={(e) => {
              setDay(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
