import { axiosClient } from "./axios.service";

export interface Registration {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  institution: string;
  role: string;
  eventId: string;
  createdAt?: string;
}

export const getAllRegistration = () => axiosClient.get("/registration");

export const createRegistration = (data: Registration) =>
  axiosClient.post("/registration", data);

export const deleteRegistration = (id: string) =>
  axiosClient.delete(`/registration/${id}`);