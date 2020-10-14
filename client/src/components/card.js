import React from "react";
import "../css/landingpagestyle.css";

export function CardHeader({ children }) {
  return (
    <header class="card-header bk ">
      <p class="card-header-title has-text-white">{children}</p>
    </header>
  );
}

// export function CardBody({ children }) {
//   return (
//     <div class="column">
//       <div class="card-content">
//         <div class="content">
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
  return <footer class="card-footer-item">{children}</footer>;
}
