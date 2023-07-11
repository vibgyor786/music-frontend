import React from "react";
// import React from 'react';
// import { Section, Title, Article, Prop, list } from "./generic";

import ReactLoading from 'react-loading';
 
const Loader = () => {
  return (
    <div className="flex z-50 w-full h-screen justify-center items-center space-x-2 bg-loaderOverlay" >
      <div className="text-center">
        <div className="w-20 h-1 min-w-[160px]  animate-bounce  rounded-full flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-red-600 blur-xl "></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
