import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export const getReminders = async () => {
  const records = await base("Reminders").select().firstPage();
  return records;
};