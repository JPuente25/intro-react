import React from "react";
import { TodoContext } from "../../TodoContext";
import './LoadingSkeleton.css'

export function LoadingSkeleton() {
   const { loading } = React.useContext(TodoContext);
   return(
      <div className={`skeleton-box ${loading && 'enabled'}`}></div>
   )
}