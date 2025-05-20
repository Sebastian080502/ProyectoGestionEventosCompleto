import Layout from "@/modules/layouts/Layouts";
import { montserrat } from "@/app/fonts";


export default function PageFeedback() {
  return (
    <Layout title={<span className={montserrat.className}>Feedback</span>}>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Feedback</h2>
        <p className="text-gray-600">
          Aquí puedes gestionar todos los feedback de la aplicación.
        </p>
      </div>
    </Layout>
  );
}
