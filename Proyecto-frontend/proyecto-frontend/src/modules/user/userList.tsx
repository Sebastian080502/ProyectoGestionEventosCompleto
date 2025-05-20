"use client";
import { useEffect, useState } from "react";
import { fetchUsers, User } from "@/services/User.service";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err: any) => setError(err.message));
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Rol</th>
            <th className="p-2">Activo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td className="p-2">{u.name}</td>
              <td className="p-2">{u.email}</td>
              <td className="p-2">{u.role}</td>
              <td className="p-2">{u.active ? "Sí" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}