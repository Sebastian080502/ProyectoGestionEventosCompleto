"use client";

import React, { useState } from "react";
import { useConferenceStore } from "@/stores/useConferenceStore";

export default function ConferenceForm() {
  const { addConference } = useConferenceStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addConference({ title, description,startDate,endDate,location,category });
    setTitle("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setCategory("");

  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="date"
        placeholder="Fecha de inicio"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="date"
        placeholder="Fecha de fin"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 mr-2"
        required
      />        
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Guardar
      </button>
      
    </form>
  );
}
