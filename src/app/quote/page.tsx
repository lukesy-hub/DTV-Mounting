import { Navbar } from "@/components/navigation/Navbar";
import { QuoteSection } from "@/components/sections/QuoteSection";

export const metadata = {
  title: "Get a Quote | DTV Mounting",
  description: "Tell DTV Mounting about your TV installation project.",
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />
      <div className="pt-16">
        <QuoteSection />
      </div>
    </main>
  );
}
