import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">

      <h3 className="text-danger mb-3">Quiz</h3>

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
              
            src="https://via.placeholde+++++r.com/250"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        {/* Quiz 2 */}
        <div className="col-md-6">
          <div className="card shadow p-3"  style={{ cursor: "pointer" }}
 onClick={() => navigate("quiz2")}>
            <h5 className="text-primary">Quiz N°2</h5>

            <img
              src="https://picsum.photos/250"
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