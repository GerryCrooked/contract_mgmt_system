// Navigation
import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Dashboard</Link></li>
        <li><Link href="/contracts">Contracts</Link></li>
        <li><Link href="/reports">Reports</Link></li>
      </ul>
    </nav>
  );
}