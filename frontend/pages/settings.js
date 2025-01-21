import { useState } from "react";

export default function Settings() {
  const [smtpSettings, setSmtpSettings] = useState({
    server: "",
    username: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  const handleSmtpChange = (e) => {
    setSmtpSettings({ ...smtpSettings, [e.target.name]: e.target.value });
  };

  const handleSmtpSave = () => {
    // Call API to save SMTP settings
    alert("SMTP settings saved successfully.");
  };

  const handleAddUser = () => {
    const newUser = { username: "", role: "" };
    setUsers([...users, newUser]);
  };

  const handleUserChange = (index, field, value) => {
    const updatedUsers = [...users];
    updatedUsers[index][field] = value;
    setUsers(updatedUsers);
  };

  const handleSaveUsers = () => {
    // Call API to save users
    alert("Users saved successfully.");
  };

  return (
    <div>
      <h1>Settings</h1>

      <section>
        <h2>SMTP Settings</h2>
        <label>
          Server:
          <input
            type="text"
            name="server"
            value={smtpSettings.server}
            onChange={handleSmtpChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={smtpSettings.username}
            onChange={handleSmtpChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={smtpSettings.password}
            onChange={handleSmtpChange}
          />
        </label>
        <button onClick={handleSmtpSave}>Save SMTP Settings</button>
      </section>

      <section>
        <h2>Manage Users</h2>
        <button onClick={handleAddUser}>Add User</button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={(e) =>
                  handleUserChange(index, "username", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Role"
                value={user.role}
                onChange={(e) =>
                  handleUserChange(index, "role", e.target.value)
                }
              />
            </li>
          ))}
        </ul>
        <button onClick={handleSaveUsers}>Save Users</button>
      </section>
    </div>
  );
}