# Task Manager Frontend

React frontend for the Task Manager app — login, view and create Projects, and view/create/delete Tasks within a selected Project.

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

## What I'd add next
- A signup form (currently only available via the backend API directly)
- Editing task status through the UI (e.g. todo → in-progress → done)
- Routing between pages (currently a single-page view)
- General styling — this was built focused on functionality, not visual design
