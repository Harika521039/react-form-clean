import React from "react";
import { useLocation, Link } from "react-router-dom";

function DetailsPage() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h2>Submitted Details</h2>

      <div className="details-box">
        {Object.entries(state).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}
      </div>

      <Link to="/" className="back-btn">Go Back</Link>
    </div>
  );
}

export default DetailsPage;
