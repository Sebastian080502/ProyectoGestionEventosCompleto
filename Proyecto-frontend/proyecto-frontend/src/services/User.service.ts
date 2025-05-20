import { axiosClient } from "./axios.service";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  active?: boolean;
  lastLogin?: string;
  createdAt?: string;
}

// Login de usuario
export const loginUser = async (email: string, password: string) => {
  const { data } = await axiosClient.post("/user/login", { email, password });
  if (!data.success) throw new Error(data.message || "Credenciales incorrectas");
  return data.user as User;
};

// Obtener todos los usuarios
export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axiosClient.get("/user");
  if (!Array.isArray(data)) throw new Error("Error al obtener usuarios");
  return data as User[];
};
