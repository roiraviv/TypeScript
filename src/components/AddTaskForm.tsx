import React, { useLayoutEffect, useState } from "react";
import Input from "./Input";

// סוג הנתונים של משימה
interface Task {
  id: number;
  subject: string;
  desc: string;
  completed: boolean;
  showDesc: boolean;
}

// סוג הנתונים של ה-Props
interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
}

const AddTaskForm: React.FC<Props> = ({ setTasks, tasks }) => {
  const [subject, setSubject] = useState("");
  const [desc, setDesc] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [addTaskContainer, setAddTaskContainer] = useState<HTMLElement | null>(
    null
  );

  // איתור האלמנט של טופס ההוספה כדי לשנות את גובהו דינאמית
  useLayoutEffect(() => {
    setAddTaskContainer(
      document.querySelector(".input-container") as HTMLElement | null
    );
  }, []);

  // הוספת משימה חדשה
  const addTask = () => {
    try {
      if (subject.trim() === "" || desc.trim() === "") {
        alert("Please fill in all fields!");
        return;
      }

      const newTask: Task = {
        id: Date.now(),
        subject,
        desc,
        completed: false,
        showDesc: false,
      };

      setTasks([...tasks, newTask]);

      // איפוס שדות הקלט וסגירת החלון
      if (addTaskContainer) addTaskContainer.style.height = "50px";
      setSubject("");
      setDesc("");
      setIsAddingTask(false);
    } catch (error) {
      console.error("Error adding new task:", error);
      alert("An error occurred while adding the task. Please try again.");
    }
  };

  // פתיחת האפשרות להוסיף משימה חדשה
  const openTaskForm = () => {
    try {
      setIsAddingTask(true);
      if (addTaskContainer) addTaskContainer.style.height = "100px";
    } catch (error) {
      console.error("Error opening task input form:", error);
      alert("An error occurred while opening the form. Please try again.");
    }
  };

  return (
    <div className="input-container">
      {!isAddingTask ? (
        <button onClick={openTaskForm} className="addTask_button">
          New Task
        </button>
      ) : (
        <div className="addTask_div">
          <div className="addTask_inputs_div">
            <Input
              setInput={setSubject}
              value={subject}
              placeholder="Enter a task subject"
            />
            <Input
              setInput={setDesc}
              value={desc}
              placeholder="Add task description"
            />
          </div>
          <button onClick={addTask}>Add</button>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
