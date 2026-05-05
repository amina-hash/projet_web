import { useState } from "react";

function Quiz1() {
  const [answers, setAnswers] = useState({});

  const handleChange = (q, value) => {
    setAnswers({ ...answers, [q]: value });
  };

  const handleSubmit = () => {
    let score = 0;

    if (answers.q1 === "script") score++;
    if (answers.q2 === "src") score++;
    if (answers.q3 === "alert") score++;
    if (answers.q4 === "var") score++;
    if (answers.q5 === "console") score++;
    if (answers.q6 === "number") score++;
    if (answers.q7 === "function") score++;

    alert("Votre note est : " + score + "/7");
  };

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Quiz JavaScript</h1>
        <p>Sept questions — une réponse par question</p>
      </div>

      <div className="ds-surface ds-card-padding">

        {/* Q1 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">1. Dans quel élément on met le code javascript ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q1" id="q1a" onChange={() => handleChange("q1", "script")} />
            <label className="form-check-label" htmlFor="q1a">script</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q1" id="q1b" onChange={() => handleChange("q1", "body")} />
            <label className="form-check-label" htmlFor="q1b">body</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q1" id="q1c" onChange={() => handleChange("q1", "link")} />
            <label className="form-check-label" htmlFor="q1c">link</label>
          </div>
        </div>

        {/* Q2 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">2. Quel attribut pour script externe ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q2" id="q2a" onChange={() => handleChange("q2", "src")} />
            <label className="form-check-label" htmlFor="q2a">src</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q2" id="q2b" onChange={() => handleChange("q2", "href")} />
            <label className="form-check-label" htmlFor="q2b">href</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q2" id="q2c" onChange={() => handleChange("q2", "rel")} />
            <label className="form-check-label" htmlFor="q2c">rel</label>
          </div>
        </div>

        {/* Q3 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">3. Comment afficher &quot;hello&quot; ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q3" id="q3a" onChange={() => handleChange("q3", "alert")} />
            <label className="form-check-label" htmlFor="q3a">alert(&quot;hello&quot;)</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q3" id="q3b" onChange={() => handleChange("q3", "write")} />
            <label className="form-check-label" htmlFor="q3b">document.write</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q3" id="q3c" onChange={() => handleChange("q3", "msg")} />
            <label className="form-check-label" htmlFor="q3c">msg(&quot;hello&quot;)</label>
          </div>
        </div>

        {/* Q4 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">4. Comment déclarer une variable ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q4" id="q4a" onChange={() => handleChange("q4", "var")} />
            <label className="form-check-label" htmlFor="q4a">var x</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q4" id="q4b" onChange={() => handleChange("q4", "int")} />
            <label className="form-check-label" htmlFor="q4b">int x</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q4" id="q4c" onChange={() => handleChange("q4", "string")} />
            <label className="form-check-label" htmlFor="q4c">string x</label>
          </div>
        </div>

        {/* Q5 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">5. Comment afficher dans la console ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q5" id="q5a" onChange={() => handleChange("q5", "console")} />
            <label className="form-check-label" htmlFor="q5a">console.log()</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q5" id="q5b" onChange={() => handleChange("q5", "print")} />
            <label className="form-check-label" htmlFor="q5b">print()</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q5" id="q5c" onChange={() => handleChange("q5", "echo")} />
            <label className="form-check-label" htmlFor="q5c">echo()</label>
          </div>
        </div>

        {/* Q6 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">6. Quel type est 10 ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q6" id="q6a" onChange={() => handleChange("q6", "number")} />
            <label className="form-check-label" htmlFor="q6a">number</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q6" id="q6b" onChange={() => handleChange("q6", "string")} />
            <label className="form-check-label" htmlFor="q6b">string</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q6" id="q6c" onChange={() => handleChange("q6", "boolean")} />
            <label className="form-check-label" htmlFor="q6c">boolean</label>
          </div>
        </div>

        {/* Q7 */}
        <div className="mb-4">
          <p className="fw-medium mb-3">7. Comment créer une fonction ?</p>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q7" id="q7a" onChange={() => handleChange("q7", "function")} />
            <label className="form-check-label" htmlFor="q7a">function()</label>
          </div>
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" name="q7" id="q7b" onChange={() => handleChange("q7", "def")} />
            <label className="form-check-label" htmlFor="q7b">def()</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="q7" id="q7c" onChange={() => handleChange("q7", "func")} />
            <label className="form-check-label" htmlFor="q7c">func()</label>
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

export default Quiz1;
