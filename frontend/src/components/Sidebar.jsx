import React from 'react';
import Card from './Card';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3>Menu</h3>

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
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    background: "#020815",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }
};

export default Sidebar;