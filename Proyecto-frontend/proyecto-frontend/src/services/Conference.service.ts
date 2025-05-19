import { axiosClient } from "./axios.service";

export const getAllConferences = () => axiosClient.get("/conference");

export const createConference = (data: any) => axiosClient.post("/conference", data);

export const deleteConference = (id:string)=>
    axiosClient.delete(`/conference/${id}`);

// puedes agregar más funciones como updateConference, deleteConference, etc.
