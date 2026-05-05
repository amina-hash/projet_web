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
    <div className="container mt-4">
      <div className="card shadow p-4">

        <h4 className="text-start text-primary">
          Quiz 1 Javascript
        </h4>

        {/* Q1 */}
        <div className="mt-3">
          <p>1. Dans quel élément on met le code javascript ?</p>
          <input type="radio" name="q1" onChange={() => handleChange("q1", "script")} /> script <br />
          <input type="radio" name="q1" onChange={() => handleChange("q1", "body")} /> body <br />
          <input type="radio" name="q1" onChange={() => handleChange("q1", "link")} /> link <br />
        </div>

        {/* Q2 */}
        <div className="mt-3">
          <p>2. Quel attribut pour script externe ?</p>
          <input type="radio" name="q2" onChange={() => handleChange("q2", "src")} /> src <br />
          <input type="radio" name="q2" onChange={() => handleChange("q2", "href")} /> href <br />
          <input type="radio" name="q2" onChange={() => handleChange("q2", "rel")} /> rel <br />
        </div>

        {/* Q3 */}
        <div className="mt-3">
          <p>3. Comment afficher "hello" ?</p>
          <input type="radio" name="q3" onChange={() => handleChange("q3", "alert")} /> alert("hello") <br />
          <input type="radio" name="q3" onChange={() => handleChange("q3", "write")} /> document.write <br />
          <input type="radio" name="q3" onChange={() => handleChange("q3", "msg")} /> msg("hello") <br />
        </div>

        {/* Q4 */}
        <div className="mt-3">
          <p>4. Comment déclarer une variable ?</p>
          <input type="radio" name="q4" onChange={() => handleChange("q4", "var")} /> var x <br />
          <input type="radio" name="q4" onChange={() => handleChange("q4", "int")} /> int x <br />
          <input type="radio" name="q4" onChange={() => handleChange("q4", "string")} /> string x <br />
        </div>

        {/* Q5 */}
        <div className="mt-3">
          <p>5. Comment afficher dans la console ?</p>
          <input type="radio" name="q5" onChange={() => handleChange("q5", "console")} /> console.log() <br />
          <input type="radio" name="q5" onChange={() => handleChange("q5", "print")} /> print() <br />
          <input type="radio" name="q5" onChange={() => handleChange("q5", "echo")} /> echo() <br />
        </div>

        {/* Q6 */}
        <div className="mt-3">
          <p>6. Quel type est 10 ?</p>
          <input type="radio" name="q6" onChange={() => handleChange("q6", "number")} /> number <br />
          <input type="radio" name="q6" onChange={() => handleChange("q6", "string")} /> string <br />
          <input type="radio" name="q6" onChange={() => handleChange("q6", "boolean")} /> boolean <br />
        </div>

        {/* Q7 */}
        <div className="mt-3">
          <p>7. Comment créer une fonction ?</p>
          <input type="radio" name="q7" onChange={() => handleChange("q7", "function")} /> function() <br />
          <input type="radio" name="q7" onChange={() => handleChange("q7", "def")} /> def() <br />
          <input type="radio" name="q7" onChange={() => handleChange("q7", "func")} /> func() <br />
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

export default Quiz1;