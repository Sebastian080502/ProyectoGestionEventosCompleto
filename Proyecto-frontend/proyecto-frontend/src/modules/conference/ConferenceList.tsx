"use client";

import React, { useEffect } from "react";
import { useConferenceStore } from "@/stores/useConferenceStore";
import type { Conference } from "@/stores/useConferenceStore";

export default function ConferenceList() {
  const { conferences, fetchConferences, removeConference } = useConferenceStore();

  useEffect(() => {
    fetchConferences();
  }, []);

  if (conferences.length === 0) return <p>No hay conferencias creadas aún.</p>;

  return (
    <div className="space-y-4">
      {conferences.map((conf: Conference) => {
        const { id, title, description, startDate, endDate, location, category } = conf;
        return (
          <div
            key={id}
            className="border p-4 rounded shadow-sm bg-white flex justify-between items-center"
          >
            <div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-gray-700">{description}</p>
              <p className="text-gray-500">
                Fecha: {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
              </p>
              <p className="text-gray-500">Ubicación: {location}</p>
              <p className="text-gray-500">Categoría: {category}</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm("¿Estás seguro de que deseas eliminar esta conferencia?")) {
                  removeConference(id);
                }
              }}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Eliminar
            </button>
          </div>
        );
      })}
    </div>
  );
}