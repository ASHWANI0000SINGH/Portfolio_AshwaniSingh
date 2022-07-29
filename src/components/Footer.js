import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="icon-class-container p-3">
      <div className="icon-class">
      <a 
              style={{ color: "white" }}
              href="https://github.com/ASHWANI0000SINGH"
            >
              <i class="bi bi-github icon "> </i>
            </a> 
        <a
          style={{ color: "white" }}
          href="https://twitter.com/@ashwani74508943"
        >
          
          <i class="bi bi-twitter icon "></i>
        </a>
        <a
          style={{ color: "white" }}
          href="https://instagram.com/singhashwanikumar793"
        >
          <i class="bi bi-instagram icon "></i>
        </a>
        <a
          style={{ color: "white" }}
          href="https://www.linkedin.com/in/ashwani-singh-53092913a/"
        >
          <i class="bi bi-linkedin icon"></i>
        </a>
        <a
          style={{ color: "white" }}
          href="https://singhashwanikumar793@gmail.com
"
        >
          <i class="bi bi-envelope-fill icon "></i>
        </a>
      </div>
      <p>&copy; 2022 ashwani.com </p>
    </div>
  );
};

export default Footer;
