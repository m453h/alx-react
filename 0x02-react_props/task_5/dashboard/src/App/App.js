import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css";
import PropTypes from 'prop-types';
import CourseList from "../CourseList/CourseList";

const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
];

function App(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
      <React.Fragment>
          <div className='root-notifications'>
              <Notifications />
          </div>
          <div className="App">
              <Header />
              <div className="App-body">
                  {isLoggedIn ? <CourseList listCourses={ listCourses } /> : <Login />}
              </div>
              <div className='App-footer'>
                  <Footer />
              </div>
          </div>
      </React.Fragment>
  );
}

App.defaultProps = {
    isLoggedIn: false,
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default App;
