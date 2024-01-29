import React, { useState, useRef, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
     const noRenderCount = useRef(0);
     const [forceRender, setForceRender] = useState(0);

     const handleReRender = () => {
        noRenderCount.current += 1;
         console.log(`This code ran ${noRenderCount.current} times and didn't cause any re-render`);
     };

    const handleForceRender = () => {
        setForceRender(forceRender + 1);
     }
 
     return (
         <div>
             <p>This component has rendered {forceRender} times.</p>
             <button onClick={handleReRender}>No Re-render</button>
             <button onClick={handleForceRender}>Force Re-render</button>
         </div>
     );
};