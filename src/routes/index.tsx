import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ProjectList } from "@/components/project-list";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Projects — Steer" },
    { name: "description", content: "Project execution workspaces for construction and engineering teams." },
    { property: "og:title", content: "Projects — Steer" },
    { property: "og:description", content: "Project execution workspaces for construction and engineering teams." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: () => <AppShell><ProjectList /></AppShell>,
});
