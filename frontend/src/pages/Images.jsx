import { useState, useEffect } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [images, setImages] = useState([]);

  // 📂 select image
  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // 📤 upload image
  const handleUpload = async () => {
    if (!image) return alert("Choisis une image !");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/upload-image",
        formData
      );

      // ➕ add new image instantly
      setImages((prev) => [res.data, ...prev]);

      setImage(null);
      setPreview(null);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  // 📥 load images
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/images"
      );

      setImages(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="container py-2">
      <div className="ds-page-header">
        <h1 className="ds-page-title">Images</h1>
        <p>Téléversement et galerie</p>
      </div>

      <div className="ds-surface ds-card-padding mb-4">
        <p className="ds-section-title">Envoyer une image</p>

        <input
          type="file"
          className="form-control mb-3"
          onChange={handleChange}
          accept="image/*"
        />

        {preview && (
          <div className="text-center mb-4">
            <img
              src={preview}
              alt="Aperçu"
              className="rounded-3 border shadow-sm"
              style={{
                maxHeight: "200px",
                width: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        )}

        <div className="d-flex flex-wrap gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleUpload}
          >
            Téléverser
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={fetchImages}
          >
            Actualiser
          </button>
        </div>
      </div>

      <p className="ds-section-title px-1">Galerie</p>
      <div className="row g-3">
        {images.map((img) => (
          <div className="col-md-3 col-sm-6" key={img.id}>
            <div className="ds-surface overflow-hidden h-100">
              <img
                src={`data:${img.type};base64,${img.image}`}
                alt={img.name}
                className="w-100"
                style={{
                  height: "160px",
                  objectFit: "cover",
                }}
              />
              <div className="px-2 py-2 text-center border-top">
                <small className="text-body-secondary text-truncate d-block">
                  {img.name}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
