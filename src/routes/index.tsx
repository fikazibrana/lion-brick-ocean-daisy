import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/chrome";
import { HomePage } from "@/components/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Tembus Media — Press release nasional dan daerah" }],
  }),
  component: function Home() {
    return (
      <Shell>
        <HomePage />
      </Shell>
    );
  },
});
