import { useEffect, useState } from "react";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);
  const [newTenant, setNewTenant] = useState({ name: "" });

  useEffect(() => {
    fetch("/api/tenants")
      .then((response) => response.json())
      .then((data) => setTenants(data))
      .catch((error) => console.error("Error fetching tenants:", error));
  }, []);

  const handleTenantChange = (e) => {
    setNewTenant({ ...newTenant, [e.target.name]: e.target.value });
  };

  const handleCreateTenant = () => {
    fetch("/api/tenants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTenant),
    })
      .then((response) => response.json())
      .then((data) => {
        setTenants([...tenants, data]);
        setNewTenant({ name: "" });
        alert("Tenant created successfully.");
      })
      .catch((error) => console.error("Error creating tenant:", error));
  };

  return (
    <div>
      <h1>Tenants</h1>

      <section>
        <h2>Create New Tenant</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newTenant.name}
            onChange={handleTenantChange}
          />
        </label>
        <button onClick={handleCreateTenant}>Create Tenant</button>
      </section>

      <section>
        <h2>Existing Tenants</h2>
        <ul>
          {tenants.map((tenant) => (
            <li key={tenant.id}>{tenant.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}