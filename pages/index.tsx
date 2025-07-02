import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Bidforce</h1>
      <SignedOut>
        <Link href="/sign-up" className="text-blue-600 underline">
          Get Started
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <Link href="/dashboard" className="mt-4 text-blue-600 underline">
          Go to Dashboard
        </Link>
      </SignedIn>
    </main>
  );
}