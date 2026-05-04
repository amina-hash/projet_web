import { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!image) {
      alert("Veuillez choisir une image !");
      return;
    }
    console.log("Image envoyée :", image);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">

        <h3 className="text-center text-primary mb-4">
          Manipulation d'images
        </h3>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Choisir une image :
          </label>
          <input
            type="file"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        {/* Preview */}
        {preview && (
          <div className="text-center mb-3">
            <img
              src={preview}
              alt="preview"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "200px" }}
            />
          </div>
        )}

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={handleUpload}
          >
            📤 Insérer Image
          </button>

          <button className="btn btn-outline-secondary">
            🖼️ Afficher toutes les images
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;