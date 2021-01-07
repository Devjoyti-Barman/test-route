import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase";
import {
  useParams,
  useHistory,
  BrowserRouter as Router,
} from "react-router-dom";

export const CourseContain: React.FC<{}> = () => {
  const history = useHistory();
  return (
    <Router>
      <div>
        pokemon
        {console.log(history)}
      </div>
    </Router>
  );
};
