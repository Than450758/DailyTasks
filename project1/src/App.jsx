import React from "react";
import InfoCards from "./InfoCards";

export default function App() {
  return (
    <div>
      <InfoCards />
    </div>
  );
}





//import React, { useEffect, useState } from 'react';

/*const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Your Kits</div>
        <nav className="nav">
          <ul>
            <li>Icons</li>
            <li>Docs</li>
            <li>Plans</li>
            <li>Support</li>
            <li>Podcast</li>
          </ul>
        </nav>
        <div className="user-icon">👤</div>
      </header>
    </div>

  );}
  export default App;*/





 /*function App() {
  return (
   <div className="h-full bg-green px-6 py-12 flex flex-col items-center">
       <nav className="h-full bg-green flex justify-between items-center py-4 border-b border-gray-200">
         <div className="flex items-center gap-20 px-4">
          <span className="text-lg font-bold text-blue-600">Your Kits</span>
           <span>Icons</span>
           <span>Docs</span>
           <span>Plans</span>
           <span>Support</span>
           <span>Podcast</span>
         </div>
       
       </nav>
 </div>
      
);}


export default App;*/







/*import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee); // Add your icons here
library.add(faHouse); // Add your icons here

function App() {
  return (
    <div>
      <h1>Hello, Font Awesome!</h1>
      <FontAwesomeIcon icon="coffee" />
            <FontAwesomeIcon icon="house" />

    </div>
  );
}

export default App;*/


/*function App() {
  const [users, setUsers] = useState([]);     // Store users
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  useEffect(() => {
    // Fetch data from the fake API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON
      })
      .then(data => {
        setUsers(data);         // Set users
        setLoading(false);      // Done loading
      })
      .catch(error => {
        setError(error);        // Set error
        setLoading(false);      // Done loading
      });
  }, []);

  // Render loading
  if (loading) return <p>Loading...</p>;

  // Render error
  if (error) return <p>Error: {error.message}</p>;

  // Render data
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/

