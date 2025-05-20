import { montserrat } from "@/app/fonts";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <section className={styles.container}>
      <h2 className={`${montserrat.className} ${styles.title}`}>🎉 Bienvenido a la Gestión de Eventos</h2>
      <p className={styles.subtitle}>
        Organiza, administra y haz de cada evento una experiencia inolvidable.<br />
        Usa el menú lateral para explorar todas las funcionalidades.
      </p>
      <a href="/registration" className={styles.button}>
        Registrate
      </a>
    </section>
  );
}