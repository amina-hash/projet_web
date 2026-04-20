import React from 'react';

import Card from './Card';
function Sidebar() {
  return (
          <div className="sidebar">
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
  )
}

export default Sidebar