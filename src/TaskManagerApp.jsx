import { useState } from "react";

export default function TaskManagerApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-4 d-flex align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="card border-0 shadow w-100 p-4">
              <div className="card-body">
                <h3 className="card-title fw-normal">Task Manager App</h3>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    placeholder="New Task"
                    className="form-control border-0 border-bottom rounded-0 "
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success mt-3 rounded-1"
                  onClick={addTask}
                >
                  ADD TASK <i class="fa-solid fa-paper-plane"></i>
                </button>
                <hr className="mt-5" />
                <h4 className="card-title mt-4 fw-normal">Tasks</h4>
                {tasks.length === 0 ? (
                  <p className="text-center text-danger"> No tasks currently</p>
                ) : (
                  <ul className="list-group">
                    {tasks.map((task, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between"
                      >
                        <span>{task}</span>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeTask(index)}
                        >
                          <i class="fa-solid fa-trash-can text-light"></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
