import React from "react";
import "../css/landingpagestyle.css";
import "../css/style.scss";

export function CardHeader({ children }) {
  return (
    <header className="card-header bk testcardheader">
      <p className="card-header-title has-text-white">{children}</p>
    </header>
  );
}

export function CardFooter({ children }) {
  return <footer className="card-footer-item">{children}</footer>;
}
