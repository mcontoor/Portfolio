import { Link } from "gatsby";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";

const options = [
  { name: "About", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const Header = () => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ margin: 10 }}>Meghna</div>
      <div style={{ display: "flex" }}>
        {options.map(option => (
          <span style={{ margin: 10 }}>
            <Link to={option.path}>{option.name}</Link>
          </span>
        ))}
        <span style={{ margin: 10 }}>
          <DarkModeToggle />
        </span>
      </div>
    </div>
  </header>
);

export default Header;
