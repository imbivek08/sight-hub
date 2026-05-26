import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home/home-page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sight Hub Eye Clinic",
    description:
      "Affordable eye care, expert optometrists, and same-day glasses in Kathmandu, Nepal.",
    openGraph: {
      title: "Sight Hub Eye Clinic",
      description:
        "Affordable eye care, expert optometrists, and same-day glasses in Kathmandu, Nepal.",
      type: "website",
    },
  };
}

export default function Home() {
  return <HomePage />;
}
