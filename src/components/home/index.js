import React, { useEffect, useState } from "react";
import DragComponent from "./DragComponent";
import "../../index.css";

const Home = () => {
  const [headerTime, setHeaderTime] = useState(``);

  useEffect(() => {
    setInterval(() => {
      var time = new Date();
      setHeaderTime(
        ("0" + time.getHours()).slice(-2) +
          ":" +
          ("0" + time.getMinutes()).slice(-2) +
          ":" +
          ("0" + time.getSeconds()).slice(-2)
      );
    });
  }, []);

  const [containerClass, setContainerClass] = useState("center");
  const changePosition = (position) => {
    setContainerClass(position);
  };
  return (
    <div>
      <header className="header">
        <div className="header--raio-btn">
          <div>
            <input
              type="radio"
              name="position"
              id="top-right"
              value={"top-right"}
              onClick={() => changePosition(`top-right`)}
            />
            <label className="radio-label" htmlFor="top-right">
              Top-Right
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="position"
              id="top-left"
              value={"top-left"}
              onClick={() => changePosition(`top-left`)}
            />
            <label htmlFor="top-left" className="radio-label">
              Top-Left
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="position"
              id="bottom-right"
              value={"bottom-right"}
              onClick={() => changePosition(`bottom-right`)}
            />
            <label htmlFor="bottom-right" className="radio-label">
              Bottom-Right
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="position"
              id="bottom-left"
              value={"bottom-left"}
              onClick={() => changePosition(`bottom-left`)}
            />
            <label htmlFor="bottom-left" className="radio-label">
              Bottom-left
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="position"
              id="center"
              value={"center"}
              onClick={() => changePosition(`center`)}
            />
            <label htmlFor="center" className="radio-label">
              Center
            </label>
          </div>
        </div>

        <div className="header--timer">
          <h3>{headerTime}</h3>
        </div>
      </header>

      <div className={`main-container ${containerClass}`}>
          <DragComponent />
      </div>

      <footer className="footer">
        <div className="footer--container"> Footer</div>
      </footer>
    </div>
  );
};

export default Home;
