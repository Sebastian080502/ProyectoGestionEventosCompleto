import React from "react";

interface LayoutProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ title, children, className = "" }: LayoutProps) {
  return (
    <section className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow p-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}