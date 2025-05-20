"use client";

import ConferenceForm from "@/modules/conference/ConferenceForm";
import ConferenceList from "@/modules/conference/ConferenceList";
import { montserrat} from "@/app/fonts";
import Layaout from "@/modules/layouts/Layouts";

export default function ConferencePage() {
  return (
    <Layaout title={<span className={montserrat.className}>Conferencias</span>}>
    
      <ConferenceForm />
      <ConferenceList />
   
    </Layaout>
  );
}
