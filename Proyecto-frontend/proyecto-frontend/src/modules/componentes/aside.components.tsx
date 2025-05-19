"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayout } from "@/modules/hooks/useLayout";

export default function Aside() {
  const pathname = usePathname();
  const { routes, title } = useLayout(pathname);

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4 shadow-md">
      <h1 className="text-xl font-bold mb-6">{title}</h1>
      <nav>
        <ul className="space-y-2">
          {routes.map(({ path, name }) => (
            <li key={path}>
              <Link
                href={path}
                className={`block px-3 py-2 rounded hover:bg-gray-300 ${
                  pathname === path ? "bg-gray-300 font-semibold" : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
