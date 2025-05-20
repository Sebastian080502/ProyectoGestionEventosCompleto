"use client";

import { useState, useEffect } from "react";
import { loginUser } from "@/services/User.service";
import { useUser } from "@/stores/useUserStore";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { setUser } = useUser();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (success) {
      timer = setTimeout(() => {
        setSuccess(false);
      }, 3000); // oculta el mensaje después de 3 segundos
    }
    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      console.log("datos enviados", { email, password });

      const user = await loginUser(email, password);
      setUser(user);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500">{error}</p>}

      {/* Mensaje con animación de opacidad */}
      <p
        className={`text-green-600 transition-opacity duration-500 ${
          success ? "opacity-100" : "opacity-0"
        }`}
        aria-live="polite"
      >
        Inicio de sesión exitoso, bienvenido
      </p>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        className="border p-2 w-full"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        type="password"
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Ingresando..." : "Ingresar"}
      </button>
    </form>
  );
}
