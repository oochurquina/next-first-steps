import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <span className="text-5xl">Main Page</span>
        <Link href="/pricing"
           className="text-blue-500 hover:text-blue-700"> Pricing
        </Link>
        {/* <Link href="/pricing">Pricing</Link> */}
    </main>
  );
}
