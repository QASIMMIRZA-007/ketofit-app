// import React, { useLayoutEffect, useState } from "react";
// import Cursor from "react-cursor-follow";

// const colors = [
//   "#ff0000",
//   "#ffa500",
//   "#ffff00",
//   "#008000",
//   "#0000ff",
//   "#4b0082",
//   "#ee82ee"
// ];

// export default function CustomCursor() {
//   const [i, setI] = useState(0);
//   useLayoutEffect(() => {
//     setTimeout(() => {
//       if (i === colors.length) setI(0);
//       else setI(i + 1);
//     }, 1000);
//   }, [i]);
//   return (
//     <div className="App">
//       <Cursor hollow color={colors[i]} duration={0.8} size={45} />
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { LuCircle } from "react-icons/lu";


const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-follower" style={{ left: cursorPosition.x, top: cursorPosition.y } }>
      <LuCircle />

    </div>
  );
};

export default CustomCursor;
