import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home/home-page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sight Hub Optical Shop",
    description:
      "Affordable eye care, expert optometrists, and same-day glasses in Bhaktpur, Nepal.",
    openGraph: {
      title: "Sight Hub Optical Shop",
      description:
        "Affordable eye care, expert optometrists, and same-day glasses in Bhaktpur, Nepal.",
      type: "website",
    },
  };
}

export default function Home() {
  return <HomePage />;
}
