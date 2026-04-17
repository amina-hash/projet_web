function AboutMe() {
  return (
    <div style={styles.container}>

      {/* LEFT SIDE */}
      <div style={styles.left}>

        <div style={styles.avatar}>
          <img src="/me.jpg" alt="me" style={styles.img} />
        </div>

        <h3>AIT HIMMI MINA</h3>
        <p style={{ fontStyle: "italic" }}>
          Étudiante en Master Réseaux et Systèmes Informatiques (RSI)
        </p>

        <hr />

        <h4>PROFILE</h4>
        <p>
          Étudiante en Master Réseaux et Systèmes Informatiques (RSI),
          passionnée par les systèmes informatiques, les réseaux et la
          cybersécurité. Curieuse et motivée, je souhaite renforcer mes
          compétences techniques et participer à des projets innovants liés
          au développement logiciel, à la sécurité et aux infrastructures IT.
        </p>

        <h4>CONTACT</h4>
        <p>📞 0691932267</p>
        <p>📧 aithimmiamina2@gmail.com</p>
        <p>📍 Drissia 2, Rue 16 N°97, Casablanca</p>

        <h4>LANGUES</h4>
        <p>Arabe (langue maternelle)</p>
        <p>Français (bien)</p>
        <p>Anglais (intermédiaire)</p>

      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>

        <h3>FORMATION</h3>
        <p><b>Master RSI</b> - FST Settat (En cours)</p>
        <p><b>Licence Génie Informatique</b> - 2025 - FST Settat</p>
        <p><b>DEUST Mathématiques, Informatique et Physique</b> - 2024</p>
        <p><b>Baccalauréat Sciences Mathématiques A</b> - 2021 (Ben M’sick, Casablanca)</p>

        <h3>COMPÉTENCES</h3>
        <p><b>Langages:</b> C, C++, Java, JavaScript, PHP, SQL, Dart</p>
        <p><b>Développement Web:</b> HTML, CSS, Node.js</p>
        <p><b>Mobile:</b> Flutter, Dart</p>
        <p><b>Frameworks:</b> React.js, Express.js, Bootstrap, Tailwind, Laravel</p>
        <p><b>Bases de données:</b> MySQL, Oracle, PostgreSQL, PL/SQL</p>
        <p><b>Systèmes:</b> Windows, Linux</p>
        <p><b>Autres:</b> UML, Génie logiciel, Administration systèmes, Réseaux</p>

        <h3>PROJETS ACADÉMIQUES</h3>
        <p>📌 Application de gestion d’échanges de devises (React, Express, SQL)</p>
        <p>📌 Plateforme de gestion de projets collaboratifs (HTML, CSS, Bootstrap, JS, PHP, MySQL)</p>
        <p>📌 Émulateur microprocesseur Motorola 6809 (Java, Assembleur)</p>
        <p>📌 Application de gestion académique universitaire (Java)</p>

      </div>

    </div>
  );
}

/* ================= STYLE ================= */
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    background: "#f5f5f5",
  },

  left: {
    width: "300px",
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  right: {
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "auto",
    marginBottom: "10px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default AboutMe;