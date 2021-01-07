import React from "react";
import "./style.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

interface PropsInterface {
  id: string;
  title: string;
  createBy: string;
  image: string;
}

export const Course: React.FC<PropsInterface> = (props) => {
  const id = props.id;
  const path = `/course/:${id}`;

  return (
    <Router>
      <div className="course__container">
        <div className="course__imageDiv">
          <img className="course__image" src={props.image} alt={props.image} />
        </div>

        <div className="course__info">
          <div className="course__title">
            <span>Title: </span>
            <Link to={path}>{props.title}</Link>
          </div>
          <div className="course__createdBy">
            <span>CreateBy: </span>
            {props.createBy}
          </div>
        </div>
      </div>
    </Router>
  );
};
