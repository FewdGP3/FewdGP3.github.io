import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";
import img from "../../img/0ec2e903d4d6d49905a1f6ea8e44ac2ed7ea7db4765475befdb4f1ef6fd82d17.jpg";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <section className="showcase">
        <Navbar />
        <img src={img} />
        <div class="overlay"></div>
        <div class="text">
          <h2>Hello,User</h2>
          {/* <a href="./about_me/about_me.html">About me</a> */}
          <Link to="/Project">Project</Link>
          <Link to="/Todo">Todo </Link>
        </div>
      </section>
    );
  }
}

export default Home;
