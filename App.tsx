import React from "react";
import "./App.css";
import { Header } from "./components/header/header";
import { Courses } from "./pages/courses/courses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CourseContain } from "./pages/courseContain./courseContain";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Courses} />
          <Route path="/course" component={CourseContain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
