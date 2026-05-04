import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">

      <h3 className="text-danger mb-3">Quiz</h3>
      <p className="text-primary">
        Si on clique sur Quiz :
      </p>

      <div className="row text-center">

        {/* Quiz 1 */}
        <div className="col-md-6">
          <div
            className="card shadow p-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("quiz1")} // ✅ RELATIVE
          >
            <h5 className="text-primary">Quiz N°1</h5>

            <img
              src="https://via.placeholder.com/250"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        {/* Quiz 2 */}
        <div className="col-md-6">
          <div className="card shadow p-3">
            <h5 className="text-primary">Quiz N°2</h5>

            <img
              src="https://via.placeholder.com/250"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Quiz;