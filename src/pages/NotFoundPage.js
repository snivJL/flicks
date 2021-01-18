import React, { useState, useEffect } from "react";
import "./notfound.scss";
const NotFoundPage = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMove = (e) => {
    setY(e.pageY);
    setX(e.pageX);
  };

  useEffect(() => {}, [x, y]);
  return (
    <div className="not-found" onMouseMove={handleMove}>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we cant find what you are looking for 'cuz its so dark in here
        </h3>
      </div>
      <div style={{ top: y, left: x }} className="torch"></div>
    </div>
  );
};

export default NotFoundPage;
