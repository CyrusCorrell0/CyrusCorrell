import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "A timeline of Cyrus Correll's projects and research work, from AI to Web Apps.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
