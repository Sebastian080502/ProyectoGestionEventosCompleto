export function useLayout(pathname: string) {
  const routes = [
    { path: "/", name: "Inicio" },
    { path: "/conference", name: "Conferencias" },
    { path: "/event", name: "Eventos" },
    { path: "/feedback", name: "Opiniones" },
    { path: "/location", name: "Ubicaciones" },
    { path: "/registration", name: "Registro" },
    { path: "/speaker", name: "Ponentes" },
    { path: "/sponsor", name: "Patrocinadores" },
    { path: "/user", name: "Usuarios" },
  ];

  // Busca el título basado en la ruta actual, si no encuentra ninguno usa "Inicio"
  const currentRoute = routes.find(route => route.path === pathname);
  const title = currentRoute ? currentRoute.name : "Inicio";

  return {
    title,
    routes,
  };
}
