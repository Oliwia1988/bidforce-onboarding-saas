import { getReminders } from "@/lib/airtable";

export default async function handler(req, res) {
  const reminders = await getReminders();
  res.status(200).json(reminders);
}