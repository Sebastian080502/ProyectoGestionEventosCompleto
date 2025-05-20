"use client";

import { useState } from "react";
import { createRegistration } from "@/services/Registration.service";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [eventId, setEventId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await createRegistration({ name, email, password, phone, institution, role, eventId });
      setSuccess("Registro exitoso");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setInstitution("");
      setRole("");
      setEventId("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" className="border p-2 w-full" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="border p-2 w-full" required />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Contraseña" type="password" className="border p-2 w-full" required />
      <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Teléfono" className="border p-2 w-full" required />
      <input value={institution} onChange={e => setInstitution(e.target.value)} placeholder="Institución" className="border p-2 w-full" required />
      <input value={role} onChange={e => setRole(e.target.value)} placeholder="Rol" className="border p-2 w-full" required />
      <input value={eventId} onChange={e => setEventId(e.target.value)} placeholder="ID del Evento" className="border p-2 w-full" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Registrar</button>
    </form>
  );
}