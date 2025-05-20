import Layaut from "@/modules/layouts/Layouts";
import { montserrat } from "@/app/fonts";

export default function PageEvento() {
  return (
    <Layaut title={<span className={montserrat.className}>Eventos</span>}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Eventos</h2>
        <p className="text-gray-600">
          Aquí puedes gestionar todos los eventos de la aplicación.
        </p>
      </div>
    </Layaut>
  );
}
