import { useState } from "react";

function Quiz2() {
  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({ ...answers, [q]: value });
  };

  const handleSubmit = () => {
    let score = 0;

    if (answers.q1 === "react") score++;
    if (answers.q2 === "ssg") score++;
    if (answers.q3 === "pages") score++;
    if (answers.q4 === "link") score++;
    if (answers.q5 === "api") score++;
    if (answers.q6 === "vercel") score++;
    if (answers.q7 === "image") score++;

    alert("Votre note est : " + score + "/7");
  };

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Quiz Next.js</h1>
        <p>Sept questions — une réponse par question</p>
      </div>

      <div className="ds-surface ds-card-padding">

        {/* Q1 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">1. Next.js مبني على شنو؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q1" id="n1a" onChange={() => handleChange("q1", "react")} />
            <label className="form-check-label" htmlFor="n1a">React</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q1" id="n1b" onChange={() => handleChange("q1", "vue")} />
            <label className="form-check-label" htmlFor="n1b">Vue</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="n1c" onChange={() => handleChange("q1", "angular")} />
            <label className="form-check-label" htmlFor="n1c">Angular</label>
          </div>
        </div>

        {/* Q2 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">2. شنو هي SSG ف Next.js؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q2" id="n2a" onChange={() => handleChange("q2", "ssg")} />
            <label className="form-check-label" htmlFor="n2a">Static Site Generation</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q2" id="n2b" onChange={() => handleChange("q2", "csr")} />
            <label className="form-check-label" htmlFor="n2b">Client Side Rendering</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q2" id="n2c" onChange={() => handleChange("q2", "ssr")} />
            <label className="form-check-label" htmlFor="n2c">Server Side Rendering</label>
          </div>
        </div>

        {/* Q3 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">3. فين كنحطو الصفحات ف Next.js؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q3" id="n3a" onChange={() => handleChange("q3", "pages")} />
            <label className="form-check-label" htmlFor="n3a">pages</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q3" id="n3b" onChange={() => handleChange("q3", "components")} />
            <label className="form-check-label" htmlFor="n3b">components</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q3" id="n3c" onChange={() => handleChange("q3", "public")} />
            <label className="form-check-label" htmlFor="n3c">public</label>
          </div>
        </div>

        {/* Q4 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">4. شنو component ديال navigation؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q4" id="n4a" onChange={() => handleChange("q4", "link")} />
            <label className="form-check-label" htmlFor="n4a">Link</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q4" id="n4b" onChange={() => handleChange("q4", "nav")} />
            <label className="form-check-label" htmlFor="n4b">nav</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q4" id="n4c" onChange={() => handleChange("q4", "a")} />
            <label className="form-check-label" htmlFor="n4c">a</label>
          </div>
        </div>

        {/* Q5 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">5. فين كنكتبو API routes؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q5" id="n5a" onChange={() => handleChange("q5", "api")} />
            <label className="form-check-label" htmlFor="n5a">/pages/api</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q5" id="n5b" onChange={() => handleChange("q5", "routes")} />
            <label className="form-check-label" htmlFor="n5b">/routes</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q5" id="n5c" onChange={() => handleChange("q5", "server")} />
            <label className="form-check-label" htmlFor="n5c">/server</label>
          </div>
        </div>

        {/* Q6 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">6. شنو أسهل deploy ل Next.js؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q6" id="n6a" onChange={() => handleChange("q6", "vercel")} />
            <label className="form-check-label" htmlFor="n6a">Vercel</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q6" id="n6b" onChange={() => handleChange("q6", "ftp")} />
            <label className="form-check-label" htmlFor="n6b">FTP</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q6" id="n6c" onChange={() => handleChange("q6", "cpanel")} />
            <label className="form-check-label" htmlFor="n6c">cPanel</label>
          </div>
        </div>

        {/* Q7 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">7. شنو component ديال الصور optimized؟</p>

          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q7" id="n7a" onChange={() => handleChange("q7", "image")} />
            <label className="form-check-label" htmlFor="n7a">Image</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q7" id="n7b" onChange={() => handleChange("q7", "img")} />
            <label className="form-check-label" htmlFor="n7b">img</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q7" id="n7c" onChange={() => handleChange("q7", "picture")} />
            <label className="form-check-label" htmlFor="n7c">picture</label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg w-100 mt-2"
          onClick={handleSubmit}
        >
          Envoyer les réponses
        </button>

      </div>
    </div>
  );
}

export default Quiz2;
