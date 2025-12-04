export const metadata = {
  title: "thedataforge.eu",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import FeedbackButton from "@/components/FeedbackButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Workflows />
      <Features />
      <Cta />
      <FeedbackButton email="hello@thedataforge.eu" />
    </>
  );
}
