import Layout from "@/modules/layouts/Layouts";
import { montserrat } from "@/app/fonts";

export default function PageSpeaker() {
  return (
    <Layout title={<span className={montserrat.className}>Registro</span>}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Registro</h2>
        <p className="text-gray-600">
          Aquí puedes gestionar todos los registros de la aplicación.
        </p>
      </div>
    </Layout>
  );
}
