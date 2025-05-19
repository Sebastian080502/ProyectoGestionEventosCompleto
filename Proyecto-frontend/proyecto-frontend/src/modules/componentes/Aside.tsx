"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { label: "Conferencias", href: "/conference" },
  { label: "Eventos", href: "/event" },
  { label: "Feedback", href: "/feedback" },
  { label: "Ubicaciones", href: "/location" },
  { label: "Inscripciones", href: "/registration" },
  { label: "Ponentes", href: "/speaker" },
  { label: "Patrocinadores", href: "/sponsor" },
  { label: "Usuarios", href: "/user" },
];

export default function Aside() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-xl font-bold mb-6">Menú</h2>
      <nav className="flex flex-col gap-3">
        {menuItems.map(({ label, href }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`block px-3 py-2 rounded-md hover:bg-gray-100 ${
                isActive ? "bg-blue-500 text-white font-semibold" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
