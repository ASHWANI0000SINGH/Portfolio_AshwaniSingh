import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectList from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';

const ProjectDisplay = () => {
    const {id}= useParams();
    const project= ProjectList[id];
  return (
    <div className="conatiner d-flex justify-content-center " >
            <div className="card card-item m-3 " style={{width:"100vh"}}>
              <img src={project.image} className="card-img-top " alt="..." />
              <div className="card-body ">
                <h5 className="card-title pt-2">{project.name} </h5>
                <p className="card-text"> {project.skills}</p>
                <a className="text-black" href={project.href}><GitHubIcon></GitHubIcon></a>

                {/* <Link to="#"> <GitHubIcon/></Link> */}

              </div>
            </div>
          </div>
  )
}

export default ProjectDisplay