"use client";

import ConferenceForm from "@/modules/conference/ConferenceForm";
import ConferenceList from "@/modules/conference/ConferenceList";
import { montserrat} from "@/app/fonts";

export default function ConferencePage() {
  return (
    <section>
      <h2 className={`${montserrat.className }text-red-700 text-3xl font-bold`}>Conferencias</h2>
      <ConferenceForm />
      <ConferenceList />
    </section>
  );
}
