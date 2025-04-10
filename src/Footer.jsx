import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-top">
          <h2 className="footer-heading">
            <span>School of Allied Health Sciences</span>
          </h2>
          <p className="footer-subheading">
            <em>
              📍 Sankari Main Road (NH-47), Ariyanoor, Salem - 636 308,
              Tamilnadu, India.
            </em>
          </p>
          {/* <button className="admission-button">Admission Open 2025-26 →</button> */}
        </div>
        <div className="footer-top">
          <h2 className="footer-heading">
            <span>Vinayaka Missions Research Foundation</span>
          </h2>
          <p className="footer-subheading">
            <em>
              📍 Sankari Main Road (NH-47), Ariyanoor, Salem - 636 308,
              Tamilnadu, India.
            </em>
          </p>
          {/* <button className="admission-button">Admission Open 2025-26 →</button> */}
        </div>
        <div className="footer-top">
          <h2 className="footer-heading">
            <span>VMKV Medical College & Hospital</span>
          </h2>
          <p className="footer-subheading">
            <em>📍 Chinna Seeragapadi, Salem – 636 308, Tamil Nadu, India</em>
          </p>
          {/* <button className="admission-button">Admission Open 2025-26 →</button> */}
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
          <h3>🔗 QUICK LINKS</h3>
          <ul>
            <li>📌 Campus Life</li>
            <li>📌 Placements</li>
            <li>📌 Examination Calendar</li>
            <li>📌 Graduation Day</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>🛠 HELP & SUPPORT</h3>
          <ul>
            <li>🚫 Anti-ragging Committee</li>
            <li>⚖️ Grievance Redressal Committee</li>
            <li>📢 Internal Complaints Committee</li>
            <li>🏢 Institution Industry Cell</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>📚 MEDIA & RESOURCES</h3>
          <ul>
            <li>📸 SAHS @ Media</li>
            <li>📝 Blogs</li>
            <li>📜 Policies</li>
            <li>🏆 Awards</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyrights © 2025 sahs. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/vinayakamission/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/vmrfdu?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.instagram.com/in.stagram.vmrfdu/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.linkedin.com/school/vmrf/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
