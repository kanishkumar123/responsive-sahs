import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "./assets/WhatsApp-Image-2024-09-12-at-11.43.13-AM.jpeg";
import logo3 from "./assets/SAhs.png";
import logo4 from "./assets/Asset 1 - Copy (1).png";
import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  const [showTop, setShowTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTop(false); // scrolling down
      } else if (currentScrollY < lastScrollY) {
        setShowTop(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Disable body scroll when sidebar is open
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [sidebarOpen]);

  // Close sidebar when escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) setSidebarOpen(false);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  useEffect(() => {
    const topHeader = document.querySelector(".top-header-wrapper");
    const navbar = document.querySelector(".navbar-sticky-wrapper");

    const updateNavbarPosition = () => {
      const isHeaderVisible = topHeader?.classList.contains("show");
      const headerHeight = topHeader?.offsetHeight || 0;

      if (isHeaderVisible) {
        navbar.style.transform = `translateY(${headerHeight}px)`;
      } else {
        navbar.style.transform = "translateY(0)";
      }
    };

    // Initial run
    updateNavbarPosition();

    // Listen for class changes or window resize
    const observer = new MutationObserver(updateNavbarPosition);
    if (topHeader) {
      observer.observe(topHeader, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
    window.addEventListener("resize", updateNavbarPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateNavbarPosition);
    };
  }, []);

  const menuItems = [
    { name: "About Us", submenu: "about" },
    { name: "Admissions", submenu: "admissions" },
    { name: "Academics", submenu: "academics" },
    { name: "Campus Life", submenu: "campus" },
    { name: "Placement", submenu: "" },
    { name: "Alumni", submenu: "" },
  ];

  const toggleSubmenu = (submenu) => {
    if (mobileSubmenu === submenu) {
      setMobileSubmenu(null);
    } else {
      setMobileSubmenu(submenu);
    }
  };

  return (
    <>
      {/* Top Header */}
      <div className={`top-header-wrapper ${showTop ? "show" : "hide"}`}>
        <div className="top-bar">
          <p className="top-contact">📞 123456789</p>

          <div className="marquee-wrapper">
            <div className="marquee-text">
              <span>📢 Admissions Open 2025–2026! Apply Now 🔗</span>
              <span>📢 Admissions Open 2025–2026! Apply Now 🔗</span>
            </div>
          </div>

          <p className="top-email">✉️ admissions@sahs.ac.in</p>
        </div>

        <div className="glass-container">
          <Link to="/">
            <div className="logo-container">
              <img src={logo2} alt="AVIT Logo" className="nav-logo" />
              <img src={logo3} alt="AHS Logo" className="nav-logo" />
              <img src={logo4} alt="AHS Logo" className="nav-logo2" />
            </div>
          </Link>
        </div>
      </div>

      {/* Enquire Now Button */}
      <a
        href="https://crm.vinayakamission.com/leadcollectionform/sahsslmon"
        target="_blank"
        rel="noopener noreferrer"
        className="enquire-now-btn"
      >
        Enquire Now!
      </a>

      {/* Sticky Navbar */}
      <div className="navbar-sticky-wrapper">
        <nav className="navbar">
          <div className="navbar-container">
            {/* Hamburger Menu Button */}
            <button
              className={`hamburger-menu ${sidebarOpen ? "active" : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Desktop Navigation */}
            <ul className="nav-links desktop-nav">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="nav-item"
                  onMouseEnter={() => setActiveDropdown(item.submenu)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span
                    className={`nav-link-text ${
                      item.submenu ? "has-dropdown" : ""
                    }`}
                  >
                    {item.name} {item.submenu ? "▼" : ""}
                  </span>

                  {/* Dropdowns */}
                  {item.submenu === "admissions" && (
                    <div
                      className={`mega-dropdown ${
                        activeDropdown === "admissions" ? "show" : ""
                      }`}
                    >
                      <div className="mega-column">
                        <h3>🎓 UG ADMISSIONS</h3>
                        <Link to="/admission-procedure">
                          📜 UG Admission Procedure
                        </Link>
                        <Link to="/ug-programs">📚 Undergraduate Programs</Link>
                        <Link to="/fee-structure?tab=UG">
                          📝 UG Fee Structure
                        </Link>
                        <Link to="/scholarships">💰 Scholarship Scheme</Link>
                      </div>
                      <div className="mega-column">
                        <h3>🎓 PG ADMISSIONS</h3>
                        <Link to="/admission-procedure?tab=PG">
                          📝 PG Admission Procedure
                        </Link>
                        <Link to="/pg-programs">📚 Postgraduate Programs</Link>
                        <Link to="/fee-structure?tab=PG">
                          📝 PG Fee Structure
                        </Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "academics" && (
                    <div
                      className={`mega-dropdown ${
                        activeDropdown === "academics" ? "show" : ""
                      }`}
                    >
                      <div className="mega-column">
                        <h3>📚 Programs</h3>
                        <Link to="/ug-pos">🎓 Undergraduate (UG)</Link>
                        <Link to="/ug-pos?tab=PG">🎓 Postgraduate (PG)</Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "campus" && (
                    <div
                      className={`mega-dropdown ${
                        activeDropdown === "campus" ? "show" : ""
                      }`}
                    >
                      <div className="mega-column">
                        <h3>🏫 Campus Life</h3>
                        <Link to="/campus-life">🎭 Life at SAHS</Link>
                        <Link to="/fests">🎉 Fests</Link>
                        <Link to="/campus">🏢 Campus</Link>
                        <Link to="/hostel">🏠 Hostel</Link>
                        <Link to="/library">📖 Library</Link>
                      </div>
                      <div className="mega-column">
                        <h3>🏢 Facilities</h3>
                        <Link to="/transport">🚌 Transport</Link>
                        <Link to="/amenities">🏥 Other Amenities</Link>
                        <Link to="/gallery">📸 Gallery</Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "about" && (
                    <div
                      className={`mega-dropdown ${
                        activeDropdown === "about" ? "show" : ""
                      }`}
                    >
                      <div className="mega-column">
                        <h3>🏛 About Us</h3>
                        <Link to="/about-sahs">📌 About SAHS</Link>
                        <Link to="/about-vmrf">📌 About VMRF</Link>
                        <Link to="/vision-mission">🌟 Vision & Mission</Link>
                        <Link to="/founder">👤 Founder</Link>
                        <Link to="/chancellor">🎓 Chancellor</Link>
                        <Link to="/administrators">🏛 Administrators</Link>
                        <Link to="/accreditations">
                          📜 Accreditations & Recognitions
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src={logo3} alt="AHS Logo" className="sidebar-nav-logo" />
          </div>
          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>
        </div>

        <ul className="sidebar-nav">
          {menuItems.map((item) => (
            <li key={item.name} className="sidebar-nav-item">
              {item.submenu ? (
                <>
                  <div
                    className="sidebar-nav-link"
                    onClick={() => toggleSubmenu(item.submenu)}
                  >
                    <span>{item.name}</span>
                    <span
                      className={`dropdown-arrow ${
                        mobileSubmenu === item.submenu ? "open" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {/* Mobile Dropdown Menus */}
                  {item.submenu === "admissions" && (
                    <div
                      className={`sidebar-submenu ${
                        mobileSubmenu === "admissions" ? "show" : ""
                      }`}
                    >
                      <div className="submenu-section">
                        <h3>🎓 UG ADMISSIONS</h3>
                        <Link
                          to="/admission-procedure"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📜 UG Admission Procedure
                        </Link>
                        <Link
                          to="/ug-programs"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📚 Undergraduate Programs
                        </Link>
                        <Link
                          to="/fee-structure?tab=UG"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📝 UG Fee Structure
                        </Link>
                        <Link
                          to="/scholarships"
                          onClick={() => setSidebarOpen(false)}
                        >
                          💰 Scholarship Scheme
                        </Link>
                      </div>
                      <div className="submenu-section">
                        <h3>🎓 PG ADMISSIONS</h3>
                        <Link
                          to="/admission-procedure?tab=PG"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📝 PG Admission Procedure
                        </Link>
                        <Link
                          to="/pg-programs"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📚 Postgraduate Programs
                        </Link>
                        <Link
                          to="/fee-structure?tab=PG"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📝 PG Fee Structure
                        </Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "academics" && (
                    <div
                      className={`sidebar-submenu ${
                        mobileSubmenu === "academics" ? "show" : ""
                      }`}
                    >
                      <div className="submenu-section">
                        <h3>📚 Programs</h3>
                        <Link
                          to="/ug-pos"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🎓 Undergraduate (UG)
                        </Link>
                        <Link
                          to="/ug-pos?tab=PG"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🎓 Postgraduate (PG)
                        </Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "campus" && (
                    <div
                      className={`sidebar-submenu ${
                        mobileSubmenu === "campus" ? "show" : ""
                      }`}
                    >
                      <div className="submenu-section">
                        <h3>🏫 Campus Life</h3>
                        <Link
                          to="/campus-life"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🎭 Life at SAHS
                        </Link>
                        <Link to="/fests" onClick={() => setSidebarOpen(false)}>
                          🎉 Fests
                        </Link>
                        <Link
                          to="/campus"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🏢 Campus
                        </Link>
                        <Link
                          to="/hostel"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🏠 Hostel
                        </Link>
                        <Link
                          to="/library"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📖 Library
                        </Link>
                      </div>
                      <div className="submenu-section">
                        <h3>🏢 Facilities</h3>
                        <Link
                          to="/transport"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🚌 Transport
                        </Link>
                        <Link
                          to="/amenities"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🏥 Other Amenities
                        </Link>
                        <Link
                          to="/gallery"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📸 Gallery
                        </Link>
                      </div>
                    </div>
                  )}

                  {item.submenu === "about" && (
                    <div
                      className={`sidebar-submenu ${
                        mobileSubmenu === "about" ? "show" : ""
                      }`}
                    >
                      <div className="submenu-section">
                        <h3>🏛 About Us</h3>
                        <Link
                          to="/about-sahs"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📌 About SAHS
                        </Link>
                        <Link
                          to="/about-vmrf"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📌 About VMRF
                        </Link>
                        <Link
                          to="/vision-mission"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🌟 Vision & Mission
                        </Link>
                        <Link
                          to="/founder"
                          onClick={() => setSidebarOpen(false)}
                        >
                          👤 Founder
                        </Link>
                        <Link
                          to="/chancellor"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🎓 Chancellor
                        </Link>
                        <Link
                          to="/administrators"
                          onClick={() => setSidebarOpen(false)}
                        >
                          🏛 Administrators
                        </Link>
                        <Link
                          to="/accreditations"
                          onClick={() => setSidebarOpen(false)}
                        >
                          📜 Accreditations & Recognitions
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={`/${item.name.toLowerCase().replace(" ", "-")}`}
                  className="sidebar-nav-link"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderNavbar;
