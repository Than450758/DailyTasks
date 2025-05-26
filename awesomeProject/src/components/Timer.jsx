import React, { useEffect } from 'react';

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick'); // Check the browser console
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center mt-10 text-lg">
      Open the console to see "Tick" messages every second.
    </div>
  );
};

export default Timer;
