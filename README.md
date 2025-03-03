# Task Manager App  

## Overview  

This is a straightforward task management application developed using React, Vite, and TypeScript. It enables users to create, complete, and delete tasks while offering filtering options based on task status. Deleted tasks are stored in a history section for reference. Additionally, the app fetches and displays an inspirational quote from the [qapi.vercel.app](https://qapi.vercel.app) Quotes API.  

## Features  

- ✅ Add new tasks with a title and description  
- 🔄 Mark tasks as completed or pending  
- 🗑️ Remove tasks (moved to history)  
- 📌 Filter tasks by category: All, Active, Completed, and History  
- 🌟 Retrieve and display a motivational quote  
- 💾 Persist tasks and history using Local Storage  
- 🎨 Seamless UI transitions for a smooth user experience  

## Technologies Used  

- ⚛️ React  
- ⚡ Vite  
- 📝 TypeScript  
- 💾 Local Storage  
- 🔗 [qapi.vercel.app](https://qapi.vercel.app) Quotes API  

## How to Use  

1. Click **"New Task"** to create a task.  
2. Enter a **title** and **description**, then confirm by clicking **"Add."**  
3. Click on a task to toggle between **completed** and **pending** states.  
4. Click the task title to **show/hide** the description.  
5. Press ❌ to remove a task (it will be stored in **history**).  
6. Use the dropdown menu to **filter tasks**: All, Active, Completed, or History.  

## API Integration  

The app integrates with the [qapi.vercel.app](https://qapi.vercel.app) Quotes API to fetch and display a random motivational quote. No API key is required.  

---

📌 **Built with ❤️ using React, Vite, and TypeScript** 🚀  
