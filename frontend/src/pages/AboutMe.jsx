function AboutMe() {
  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">À propos</h1>
        <p>Profil, formation et compétences</p>
      </div>

      <div className="row g-4">
        <div className="col-lg-4">
          <div className="ds-surface ds-card-padding h-100">
            <div
              className="rounded-circle overflow-hidden mx-auto bg-light border"
              style={{ width: "112px", height: "112px" }}
            >
              <img
                src="/me.jpg"
                alt="Portrait"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>

            <h2 className="h5 text-center fw-semibold mt-3 mb-1">
              AIT HIMMI MINA
            </h2>
            <p className="text-center text-body-secondary small fst-italic mb-4">
              Étudiante en Master Réseaux et Systèmes Informatiques (RSI)
            </p>

            <hr className="my-3 opacity-25" />

            <p className="ds-section-title">Profil</p>
            <p className="small lh-lg mb-4">
              Étudiante en Master Réseaux et Systèmes Informatiques (RSI),
              passionnée par les systèmes informatiques, les réseaux et la
              cybersécurité. Curieuse et motivée, je souhaite renforcer mes
              compétences techniques et participer à des projets innovants liés
              au développement logiciel, à la sécurité et aux infrastructures IT.
            </p>

            <p className="ds-section-title">Contact</p>
            <ul className="list-unstyled small mb-4">
              <li className="mb-2">📞 0691932267</li>
              <li className="mb-2">📧 aithimmiamina2@gmail.com</li>
              <li>📍 Drissia 2, Rue 16 N°97, Casablanca</li>
            </ul>

            <p className="ds-section-title">Langues</p>
            <ul className="list-unstyled small mb-0">
              <li>Arabe (langue maternelle)</li>
              <li>Français (bien)</li>
              <li>Anglais (intermédiaire)</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="ds-surface ds-card-padding mb-4">
            <p className="ds-section-title">Formation</p>
            <ul className="list-unstyled small lh-lg mb-0">
              <li className="mb-2">
                <strong>Master RSI</strong> — FST Settat (En cours)
              </li>
              <li className="mb-2">
                <strong>Licence Génie Informatique</strong> — 2025 — FST Settat
              </li>
              <li className="mb-2">
                <strong>DEUST Mathématiques, Informatique et Physique</strong> — 2024
              </li>
              <li>
                <strong>Baccalauréat Sciences Mathématiques A</strong> — 2021 (Ben
                M’sick, Casablanca)
              </li>
            </ul>
          </div>

          <div className="ds-surface ds-card-padding mb-4">
            <p className="ds-section-title">Compétences</p>
            <ul className="list-unstyled small lh-lg mb-0">
              <li className="mb-2">
                <strong>Langages :</strong> C, C++, Java, JavaScript, PHP, SQL, Dart
              </li>
              <li className="mb-2">
                <strong>Développement Web :</strong> HTML, CSS, Node.js
              </li>
              <li className="mb-2">
                <strong>Mobile :</strong> Flutter, Dart
              </li>
              <li className="mb-2">
                <strong>Frameworks :</strong> React.js, Express.js, Bootstrap,
                Tailwind, Laravel
              </li>
              <li className="mb-2">
                <strong>Bases de données :</strong> MySQL, Oracle, PostgreSQL, PL/SQL
              </li>
              <li className="mb-2">
                <strong>Systèmes :</strong> Windows, Linux
              </li>
              <li>
                <strong>Autres :</strong> UML, Génie logiciel, Administration
                systèmes, Réseaux
              </li>
            </ul>
          </div>

          <div className="ds-surface ds-card-padding">
            <p className="ds-section-title">Projets académiques</p>
            <ul className="list-unstyled small lh-lg mb-0">
              <li className="mb-2">
                📌 Application de gestion d’échanges de devises (React, Express,
                SQL)
              </li>
              <li className="mb-2">
                📌 Plateforme de gestion de projets collaboratifs (HTML, CSS,
                Bootstrap, JS, PHP, MySQL)
              </li>
              <li className="mb-2">
                📌 Émulateur microprocesseur Motorola 6809 (Java, Assembleur)
              </li>
              <li>
                📌 Application de gestion académique universitaire (Java)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
