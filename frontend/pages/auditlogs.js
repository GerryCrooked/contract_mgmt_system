import { useEffect, useState } from "react";

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("/api/auditlogs")
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => console.error("Error fetching audit logs:", error));
  }, []);

  return (
    <div>
      <h1>Audit Logs</h1>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Action</th>
            <th>User</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} style={{ color: log.color }}>
              <td>{log.timestamp}</td>
              <td>{log.action}</td>
              <td>{log.user}</td>
              <td>{log.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}