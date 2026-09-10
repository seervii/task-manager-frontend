# Task Manager Frontend

React frontend for the Task Manager app — login, view and create Projects, and view/create/delete Tasks within a selected Project.

## Why I built this

Built alongside the backend as my first React project — I had no prior frontend experience going in. This was where I learned core React concepts (components, state, hooks, connecting to a REST API) hands-on, by building real, working screens rather than working through isolated exercises.

## Features
- Login form — authenticates against the backend and stores the JWT in `localStorage`
- View all Projects, fetched live from the API
- Create new Projects
- Click a Project to view its Tasks
- Create new Tasks within a selected Project
- Delete Projects and Tasks

## Tech Stack
React, Vite

## Setup
1. Clone the repo
2. `npm install`
3. `npm run dev`
4. Requires the backend running at `http://localhost:3000` — see [task-manager-api](https://github.com/seervii/task-manager-api)

## Screenshots
<!-- Add screenshots here, e.g.: -->
<!-- ![Login screen](./screenshots/login.png) -->
<!-- ![Projects view](./screenshots/projects.png) -->

## What I'd add next
- A signup form (currently only available via the backend API directly)
- Editing task status through the UI (e.g. todo → in-progress → done)
- Routing between pages (currently a single-page view)
- General styling — this was built focused on functionality, not visual design
