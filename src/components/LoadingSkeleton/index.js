import React from "react";
import './LoadingSkeleton.css'

export const LoadingSkeleton = ({loading}) => {
   return(
      <div className={`skeleton-box ${loading && 'enabled'}`}></div>
   )
}