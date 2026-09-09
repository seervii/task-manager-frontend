import { useState, useEffect } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  const fetchProjects = async () => {
    const response = await fetch('http://localhost:3000/projects');
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    await fetch('http://localhost:3000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name })
    });

    setName('');
    fetchProjects();
  };

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>

      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="New project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default Projects;