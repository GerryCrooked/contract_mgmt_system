import { useEffect, useState } from "react";

export default function Workflows() {
  const [workflows, setWorkflows] = useState([]);
  const [newWorkflow, setNewWorkflow] = useState({ name: "", description: "" });

  useEffect(() => {
    fetch("/api/workflows")
      .then((response) => response.json())
      .then((data) => setWorkflows(data))
      .catch((error) => console.error("Error fetching workflows:", error));
  }, []);

  const handleWorkflowChange = (e) => {
    setNewWorkflow({ ...newWorkflow, [e.target.name]: e.target.value });
  };

  const handleCreateWorkflow = () => {
    fetch("/api/workflows", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWorkflow),
    })
      .then((response) => response.json())
      .then((data) => {
        setWorkflows([...workflows, data]);
        setNewWorkflow({ name: "", description: "" });
        alert("Workflow created successfully.");
      })
      .catch((error) => console.error("Error creating workflow:", error));
  };

  return (
    <div>
      <h1>Workflows</h1>

      <section>
        <h2>Create New Workflow</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newWorkflow.name}
            onChange={handleWorkflowChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newWorkflow.description}
            onChange={handleWorkflowChange}
          />
        </label>
        <button onClick={handleCreateWorkflow}>Create Workflow</button>
      </section>

      <section>
        <h2>Existing Workflows</h2>
        <ul>
          {workflows.map((workflow) => (
            <li key={workflow.id}>
              <h3>{workflow.name}</h3>
              <p>{workflow.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}