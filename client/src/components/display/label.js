import React from "react";
import Box from "./box";

 function Label({ children }){
     return(
         <>
        <label class="label">{children}</label>
        </>
     )

} export default Label;