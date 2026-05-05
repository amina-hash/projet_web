import Card from "./Card";

function Sidebar() {
  return (
    <aside
      className="flex-shrink-0 text-white d-flex flex-column gap-3 p-3"
      style={{
        width: "260px",
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        minHeight: "100%",
      }}
    >
      <h2 className="h6 text-uppercase letter-spacing text-white-50 mb-1 px-1">
        Menu
      </h2>

      <Card
        title="About Me"
        icon="👤"
        description="Mon CV et mes compétences"
        link="/dashboard/about"
      />

      <Card
        title="Mes Projets"
        icon="📁"
        description="Voir tous mes projets"
        link="/dashboard/projects"
      />
    </aside>
  );
}

export default Sidebar;
