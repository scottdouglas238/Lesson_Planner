import React from "react";

export function CardHeader({ children }) {
  return (
    <header class="card-header">
      <p class="card-header-title">{children}</p>
    </header>
  );
}

export function CardBody({ children }) {
  return (
    <div class="column">
      <div class="card-content">
        <div class="content">
          <li>{children}</li>
          <li>{children}</li>
        </div>
      </div>
    </div>
  );
}

export function CardFooter({ children }) {
  return <footer class="card-footer">{children}</footer>;
}
