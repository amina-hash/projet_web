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
    <div className="container mt-5">

      <div className="card shadow-lg p-4">

        <h3 className="text-center text-primary mb-4">
          Image Upload System
        </h3>

        {/* file input */}
        <input
          type="file"
          className="form-control mb-3"
          onChange={handleChange}
        />

        {/* preview */}
        {preview && (
          <div className="text-center mb-3">
            <img
              src={preview}
              alt="preview"
              style={{
                height: "150px",
                objectFit: "cover"
              }}
              className="rounded shadow"
            />
          </div>
        )}

        {/* buttons */}
        <div className="d-flex justify-content-between">
          <button
            className="btn btn-primary"
            onClick={handleUpload}
          >
            📤 Upload
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={fetchImages}
          >
            🔄 Refresh
          </button>
        </div>

        {/* gallery */}
        <div className="row mt-4">

          {images.map((img) => (
            <div className="col-md-3 col-sm-6 mb-3" key={img.id}>

              <div className="card shadow-sm">

                <img
                  src={`data:${img.type};base64,${img.image}`}
                  alt={img.name}
                  style={{
                    height: "150px",
                    objectFit: "cover"
                  }}
                  className="card-img-top"
                />

                <div className="card-body text-center">
                  <small>{img.name}</small>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ImageUpload;