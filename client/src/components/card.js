import React from "react";
import "../css/landingpagestyle.css";

export function CardHeader({ children }) {
  return (
    <header className="card-header bk ">
      <p className="card-header-title has-text-white">{children}</p>
    </header>
  );
}

// export function CardBody({ children }) {
//   return (
//     <div className="column">
//       <div className="card-content">
//         <div className="content">
//           <li>{children}</li>
//           <li>{children}</li>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function CardFields({ children }) {
//   return <li>{children}</li>;
// }

export function CardFooter({ children }) {
  return <footer className="card-footer-item">{children}</footer>;
}
