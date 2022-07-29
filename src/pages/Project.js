import React from "react";
import helpers from "../helpers/ProjectList";
import "../style/Project.css";
import { useNavigate } from "react-router";
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';


const Project = () => {
  const navigate = useNavigate();
 

  return (
    <>
      <h1 className=" m-3 d-flex justify-content-center">Projects</h1>
      {helpers.map((item, index) => {
        return (
          <div className="container d-flex justify-content-center ">
            <div className="row card-conatiner ">
              <div
                className="col-md-4 card-row  m-3 p-2 "
                onClick={() => {
                  navigate("/project/" + index);
                }}
              >
                <div className="card card-row " style={{ width: "80vh" }}>
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    {/* <h5 className="card-title">{item.name}</h5> */}
                    <p  style={{fontSize:"20px"}} className="card-text ">{item.name}</p>
                    <a className="text-black" href={item.href}><GitHubIcon></GitHubIcon></a>


                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>


  );
};

export default Project;
