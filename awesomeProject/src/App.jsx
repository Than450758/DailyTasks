import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { useEffect } from 'react';
import Timer from './components/Timer';
// import Header from './components/Header'
// import Body from './components/Body'
// import Delete from './components/Delete'

//import PostList from './components/PostList';

/*function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;*/
///////////timer example

function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
};

export default App;


  /*const [count, setCount] = useState(0)
  const handleIncrease = () => setCount(1 + count)
  const handleDecrease = () => setCount( count-1)
  const del= () => setCount( count-1)
  return (
    <>
     <Header count={count} />
     <Body 
      // setCount={setCount} 
      // count={count} 
      handleIncrease={handleIncrease} 
      handleDecrease={handleDecrease}
   
      />
      <Delete
      del={del} />
    </>
  )
}

export default App*/
