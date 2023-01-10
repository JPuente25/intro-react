import React from "react";
import { LoadingSkeleton } from '../LoadingSkeleton';

export const TodoLoading = ({loading}) => {
   return (
      new Array(6).fill().map((el, i) => (
         <LoadingSkeleton
            key={i}
            loading={loading}
         />
      ))
   );
}