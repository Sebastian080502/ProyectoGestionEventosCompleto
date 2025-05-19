"use client";

import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Gestión de Eventos</h1>
      {/* Aquí puedes agregar usuario, botones o iconos */}
      <div>
        {/* Ejemplo de usuario */}
        <span className="text-gray-600">Juan Sebastián</span>
      </div>
    </header>
  );
}
