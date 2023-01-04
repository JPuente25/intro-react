import React from "react";
import { TodoContext } from "../../TodoContext";
import './LoadingSkeleton.css'

export const LoadingSkeleton = () => {
   const { loading } = React.useContext(TodoContext);
   return(
      <div className={`skeleton-box ${loading && 'enabled'}`}></div>
   )
}