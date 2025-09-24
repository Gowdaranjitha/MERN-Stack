# React Task Manager

A **React-based Task Manager** application to manage our daily tasks efficiently. This project demonstrates the use of React functional components, state management using `useState`, and dynamic rendering.

## 🔹 Features

- **Add Tasks**: Create new tasks with a title and description.
- **View Tasks**: See all tasks in a neat, organized layout.
- **Update Task Status**: Mark tasks as `Pending` or `Completed` using a dropdown.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Color-coded UI**: Completed tasks appear green, pending tasks appear red, making it easy to differentiate.
- **Responsive Layout**: Works well on desktop and mobile screens.

## 🔹 How It Works

1. **State Management**:  
   - The `Home` component stores all tasks in a React state (`useState`).
   - Each task has a title, description, and status.

2. **Task Display**:  
   - The `TaskCard` component is used to render each task.
   - Users can see task details and status dynamically.

3. **Updating Tasks**:  
   - Users can change the status of a task (Pending → Completed) via a dropdown.
   - Users can delete tasks using the **Delete** button.
   - Changes are reflected immediately in the UI.