import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-10 prompt-1 ">
              <h2 className="display-1"> Hi, My Name is Ashwani Singh!</h2>

              <p className="pt-3" style={{ fontSize: "20px" }}>
                A software developer with a passion for learning and creating.
              </p>

              <a href="https://singhashwanikumar793@gmail.com" > <button className="btn btn-success btn-hire-me ">Hire Me</button></a>
            </div>

            <div className="col-md-2 icon-group  ">
              <a
                className="icon-1"
                style={{ color: "white" }}
                href="https://github.com/ASHWANI0000SINGH"
              >
                <i class="bi bi-github icon "> </i>
              </a>
              <a
                className="icon-1"
                style={{ color: "white" }}
                href="https://twitter.com/@ashwani74508943"
              >
                {" "}
                <i class="bi bi-twitter icon "></i>
              </a>
              <a
                                className="icon-1"
                style={{ color: "white" }}
                href="https://instagram.com/singhashwanikumar793"
              >
                <i class="bi bi-instagram icon "></i>
              </a>
              <a
                                className="icon-1"

                style={{ color: "white" }}
                href="https://www.linkedin.com/in/ashwani-singh-53092913a/"
              >
                <i class="bi bi-linkedin icon"></i>
              </a>
              <a
                                className="icon-1"

                style={{ color: "white" }}
                href="https://singhashwanikumar793@gmail.com
"
              >
                <i class="bi bi-envelope-fill icon "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="skills ">
        <h1 className="heading p-3"> Technology</h1>
        <ol className="list  ">
          <div className="container">
            <div className="row justify-content-center d-flex">
              <div className="col-md-3">
                <h2> Front-End</h2>
                <span>Experience with ReactJS, Redux</span>
              </div>

              <div className="col-md-3">
                <h2>Back-End</h2>
                <span>Experience With Node JS and databases.</span>
              </div>

              <div className="col-md-3">
                <h2>UI</h2>
                <span>Experience with Material UI and Bootstrap</span>
              </div>
              <div className="col-md-3">
                <h2> Front-End</h2>
                <span>Experience with ReactJS, Redux</span>
              </div>
            </div>
          </div>
        </ol>

        <div>
          <img
            src="https://media0.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
            alt="html"
            width="100px"
          />
          <img
            src="https://media2.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif"
            alt="css"
            width="100px"
          />
          <img
            src="https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
            alt="js"
            width="100px"
          />
          <img
            src="https://media3.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
            alt=""
            width="100px"
          />
          <img
            src="https://media0.giphy.com/media/kdFc8fubgS31b8DsVu/giphy.gif?cid=ecf05e475s8hxqzy0cpflybg0v5bj2pbnspil14434ddkto2&rid=giphy.gif"
            alt=""
            width="100px"
          />
          <img
            src="https://media1.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif"
            alt=""
            width="100px"
          />
          <img
            src="https://media0.giphy.com/media/wgFWLRiND4bkyYR4IN/giphy.gif"
            alt=""
            width="100px"
          />
          <img
            src="https://media0.giphy.com/media/ZG6ntb6RclFZ7sjqcz/giphy.gif?cid=ecf05e47hujgsk3y9rqoju6o7kdxbka25lyefh1rg90hkx5k&rid=giphy.gif"
            alt=""
            width="100px"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
