import { FaTimesCircle } from "react-icons/fa";

function ShowTasks({ tasks, toggleDone, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => {
        const { id, text, day, isDone } = task;
        return (
          <div
            className={`task ${isDone ? "done" : ""}`}
            key={id}
            onDoubleClick={() => toggleDone(id)}
          >
            <h3>
              {text}
              <FaTimesCircle
                style={{ color: "red" }}
                onClick={() => deleteTask(id)}
              />
            </h3>
            <h6>{day}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default ShowTasks;
