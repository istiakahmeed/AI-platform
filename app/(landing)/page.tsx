import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <p className="text-6xl">Hello AI SaaS (Unprotected)</p>
      <div>
        <Link href="/sign-in">
          <Button>login</Button>
        </Link>
      </div>
    </div>
  );
}
