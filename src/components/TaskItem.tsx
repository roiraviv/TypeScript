import React from "react";

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
  task: Task;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setHistory: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Task: React.FC<Props> = ({ task, tasks, setTasks, setHistory }) => {
  // סימון משימה כהושלמה
  const toggleTaskCompletion = (id: number) => {
    try {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (error) {
      console.error("Error while completing the task:", error);
      alert("An error occurred while completing the task. Please try again.");
    }
  };

  // הצגת/הסתרת תיאור המשימה
  const toggleTaskDescription = (id: number) => {
    try {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, showDesc: !task.showDesc } : task
        )
      );
    } catch (error) {
      console.error("Error while toggling task description:", error);
      alert(
        "An error occurred while toggling the task description. Please try again."
      );
    }
  };

  // מחיקת משימה והעברתה להיסטוריה
  const removeTask = (id: number) => {
    try {
      const taskToDelete = tasks.find((task) => task.id === id);
      if (taskToDelete) {
        setHistory((prevHistory) => [...prevHistory, taskToDelete]);
      }
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error while deleting the task:", error);
      alert("An error occurred while deleting the task. Please try again.");
    }
  };

  return (
    <li key={task.id} className={task.completed ? "completed" : ""}>
      <div className="taskContainer">
        <div
          className="taskSubject"
          onClick={() => toggleTaskDescription(task.id)}
        >
          {task.subject}
        </div>
        <div className="taskActions">
          <button onClick={() => toggleTaskCompletion(task.id)}>Done!</button>
          <button onClick={() => removeTask(task.id)}>FML</button>
        </div>
      </div>
      {task.showDesc && <div className="taskDescription">{task.desc}</div>}
    </li>
  );
};

export default Task;
