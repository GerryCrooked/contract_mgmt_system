// Haupt-Dashboard
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <h1>Welcome to the Contract Management System</h1>
        <p>This is your dashboard.</p>
      </main>
    </div>
  );
}