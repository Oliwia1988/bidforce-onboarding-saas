import { auth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { userId } = auth();
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    async function fetchReminders() {
      const res = await fetch("/api/reminders");
      const data = await res.json();
      setReminders(data);
    }
    fetchReminders();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Welcome to your dashboard</h2>
      <ul>
        {reminders.map((r: any) => (
          <li key={r.id} className="border p-2 mb-2">
            {r.fields.Description} - {r.fields.Status}
          </li>
        ))}
      </ul>
    </div>
  );
}