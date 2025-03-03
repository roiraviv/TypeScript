import React, { useState, useEffect } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskItem from "./TaskItem";
import FilterSelect from "./FilterSelect";

// סוג הנתונים של משימה
interface Task {
  id: number;
  subject: string;
  desc: string;
  completed: boolean;
  showDesc: boolean;
}

const ToDoApp: React.FC = () => {
  // אתחול המשימות וההיסטוריה מתוך localStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return [];
    }
  });

  const [history, setHistory] = useState<Task[]>(() => {
    try {
      const savedHistory = localStorage.getItem("history");
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error("Error loading history from localStorage:", error);
      return [];
    }
  });

  const [filterTerm, setFilterTerm] = useState("All"); // ברירת מחדל: הצגת כל המשימות

  // עדכון localStorage בכל שינוי של משימות או היסטוריה
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
      alert("Something went wrong, please try again.");
    }
  }, [tasks]);

  useEffect(() => {
    try {
      localStorage.setItem("history", JSON.stringify(history));
    } catch (error) {
      console.error("Error saving history to localStorage:", error);
      alert("Something went wrong, please try again.");
    }
  }, [history]);

  // סינון המשימות לפי הפילטר שנבחר
  const filteredTasks =
    filterTerm === "History"
      ? history
      : tasks.filter((task) => {
          if (filterTerm === "All") return true;
          return filterTerm === "Open" ? !task.completed : task.completed;
        });

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="upperSection">
        <AddTaskForm setTasks={setTasks} tasks={tasks} />
        <FilterSelect setFilterTerm={setFilterTerm} />
      </div>
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              setHistory={setHistory}
            />
          ))
        ) : (
          <h1>Empty...</h1>
        )}
      </ul>
    </div>
  );
};

export default ToDoApp;
