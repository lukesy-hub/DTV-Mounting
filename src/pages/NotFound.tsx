import { PageHero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { usePageMeta } from "@/hooks/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found");
  return <PageHero eyebrow="Error 404" headline={["This page", "isn't on the wall."]} support="The page you're looking for has moved or doesn't exist." actions={<><Button to="/">Back to home</Button><Button to="/services" variant="outline">Browse services</Button></>} />;
}
