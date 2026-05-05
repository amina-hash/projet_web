import { useEffect, useState } from "react";
import axios from "axios";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Geolocalisation() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const center = [33.5731, -7.5898];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
        Users Map 🗺️
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <MapContainer
          center={center}
          zoom={6}
          style={{
            width: "80%",
            height: "450px",
            borderRadius: "12px",
          }}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {users.map((user) => (
            <Marker
              key={user.id}
              position={[
                parseFloat(user.latitude),
                parseFloat(user.longitude),
              ]}
              icon={defaultIcon}
            >
              <Popup>
                {user.first_name} {user.last_name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Geolocalisation;