import { create } from "zustand";
import { getAllConferences, createConference, deleteConference } from "@/services/Conference.service";

export type Conference = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  category: string;
  createdAt: string;
};

interface ConferenceStore {
  conferences: Conference[];
  fetchConferences: () => void;
  addConference: (data: Partial<Conference>) => void;
  removeConference: (id: string) => void;
}

export const useConferenceStore = create<ConferenceStore>()((set) => ({
  conferences: [],
  
  fetchConferences: async () => {
    const { data } = await getAllConferences();
    set({ conferences: data });
  },

  addConference: async (data) => {
    await createConference(data);
    const { data: updated } = await getAllConferences();
    set({ conferences: updated });
  },

  removeConference: async (id: string) => {
    await deleteConference(id);
    const {data : updated} = await getAllConferences();
    set({ conferences: updated });
  }
}));
