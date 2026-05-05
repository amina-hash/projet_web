import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Quiz</h1>
        <p>Choisissez une série de questions</p>
      </div>

      <div className="row g-4">

        {/* Quiz 1 */}
        <div className="col-md-6">
          <div
            role="button"
            tabIndex={0}
            className="ds-surface ds-card-padding h-100 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("quiz1")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate("quiz1");
              }
            }}
          >
            <h2 className="h5 fw-semibold mb-3">Quiz N°1</h2>

            <img
              src="https://picsum.photos/id/180/400/240"
              className="img-fluid rounded-3 border w-100"
              alt=""
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Quiz 2 */}
        <div className="col-md-6">
          <div
            role="button"
            tabIndex={0}
            className="ds-surface ds-card-padding h-100 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("quiz2")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate("quiz2");
              }
            }}
          >
            <h2 className="h5 fw-semibold mb-3">Quiz N°2</h2>

            <img
              src="https://picsum.photos/id/28/400/240"
              className="img-fluid rounded-3 border w-100"
              alt=""
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Quiz;
