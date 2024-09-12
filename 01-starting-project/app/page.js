import Link from "next/link";
import Header from "@/components/header";
export default function Home() {
  console.log('hellow');
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Page</Link></p>
    </main>
  );
}