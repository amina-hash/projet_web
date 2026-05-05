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
    <div className="container mt-4">
      <div className="card shadow p-4">

        <h4 className="text-center text-success">
          Quiz 2 Next.js
        </h4>

        {/* Q1 */}
        <div className="mt-3">
          <p>1. Next.js مبني على شنو؟</p>

          <input type="radio" name="q1" onChange={() => handleChange("q1", "react")} /> React <br />
          <input type="radio" name="q1" onChange={() => handleChange("q1", "vue")} /> Vue <br />
          <input type="radio" name="q1" onChange={() => handleChange("q1", "angular")} /> Angular <br />
        </div>

        {/* Q2 */}
        <div className="mt-3">
          <p>2. شنو هي SSG ف Next.js؟</p>

          <input type="radio" name="q2" onChange={() => handleChange("q2", "ssg")} /> Static Site Generation <br />
          <input type="radio" name="q2" onChange={() => handleChange("q2", "csr")} /> Client Side Rendering <br />
          <input type="radio" name="q2" onChange={() => handleChange("q2", "ssr")} /> Server Side Rendering <br />
        </div>

        {/* Q3 */}
        <div className="mt-3">
          <p>3. فين كنحطو الصفحات ف Next.js؟</p>

          <input type="radio" name="q3" onChange={() => handleChange("q3", "pages")} /> pages <br />
          <input type="radio" name="q3" onChange={() => handleChange("q3", "components")} /> components <br />
          <input type="radio" name="q3" onChange={() => handleChange("q3", "public")} /> public <br />
        </div>

        {/* Q4 */}
        <div className="mt-3">
          <p>4. شنو component ديال navigation؟</p>

          <input type="radio" name="q4" onChange={() => handleChange("q4", "link")} /> Link <br />
          <input type="radio" name="q4" onChange={() => handleChange("q4", "nav")} /> nav <br />
          <input type="radio" name="q4" onChange={() => handleChange("q4", "a")} /> a <br />
        </div>

        {/* Q5 */}
        <div className="mt-3">
          <p>5. فين كنكتبو API routes؟</p>

          <input type="radio" name="q5" onChange={() => handleChange("q5", "api")} /> /pages/api <br />
          <input type="radio" name="q5" onChange={() => handleChange("q5", "routes")} /> /routes <br />
          <input type="radio" name="q5" onChange={() => handleChange("q5", "server")} /> /server <br />
        </div>

        {/* Q6 */}
        <div className="mt-3">
          <p>6. شنو أسهل deploy ل Next.js؟</p>

          <input type="radio" name="q6" onChange={() => handleChange("q6", "vercel")} /> Vercel <br />
          <input type="radio" name="q6" onChange={() => handleChange("q6", "ftp")} /> FTP <br />
          <input type="radio" name="q6" onChange={() => handleChange("q6", "cpanel")} /> cPanel <br />
        </div>

        {/* Q7 */}
        <div className="mt-3">
          <p>7. شنو component ديال الصور optimized؟</p>

          <input type="radio" name="q7" onChange={() => handleChange("q7", "image")} /> Image <br />
          <input type="radio" name="q7" onChange={() => handleChange("q7", "img")} /> img <br />
          <input type="radio" name="q7" onChange={() => handleChange("q7", "picture")} /> picture <br />
        </div>

        <button
          className="btn btn-success mt-4"
          onClick={handleSubmit}
        >
          Submit result
        </button>

      </div>
    </div>
  );
}

export default Quiz2;