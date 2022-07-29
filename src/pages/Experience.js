import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import "../style/Experience.css";
const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education school"
          date="2014-2015"
          iconStyle={{backgroundColor:"#21325e"}}

          icon={<SchoolIcon className="school-icon" />}
        >
          <h3> Kv Asc Centre Bangalore</h3>
          <p>12th Classs</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education school"
          icon={<SchoolIcon  className="school-icon"/>}
          date="2016-2020"
          iconStyle={{backgroundColor:"#21325e"}}

        >
          <h3> Jain College Bangalore</h3>
          <p>
            Bachelor of Computer Application
            <br />
            Mobile Application and Cloud Technology
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education work"
          date="2021 -2021"
          iconStyle={{backgroundColor:"yellow"}}

          icon={<WorkHistoryIcon className="work-icon" />}
        >
          <h3> Melange India Bangalore</h3>
          <p>Key Account Manager</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education work"
          date="2021-present"
          icon={<WorkHistoryIcon  className="work-icon"/>}
          iconStyle={{backgroundColor:"yellow"}}


        >
          <h3> HCL Technologies Bangalore</h3>
          <p>Software Engineer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element-education school "
          date="2021-present"
          iconStyle={{backgroundColor:"#21325e"}}
          icon={<SchoolIcon className="school-icon" />}
        >
          <h3> Scalar Academy</h3>
          <p> Masters(Software Engineer Program) </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
