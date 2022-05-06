import React from "react";
import "./notfound.css";
import notfound from '../../assets/notfound.png';

const NotFound = () => {
  return (
    <div className="notfound">
      <img src={notfound} alt="take this" className="takethis"/>
    </div>
  );
};
export default NotFound;
