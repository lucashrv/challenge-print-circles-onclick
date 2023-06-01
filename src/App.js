import { useState } from 'react';
import './App.css';

function App() {
  const [coordinates, setCoordinates] = useState([])

  const getCoodinates = (e) => {
    const { clientX, clientY } = e

    setCoordinates([ ...coordinates, { clientX, clientY }])
    console.log(e);
  }

  return (
    <div className="App" onClick={getCoodinates}>
      {coordinates.map((coords, i) => {
        return (
          <div
            key={i}
            className='circle'
            style={{ left: coords.clientX - 25, top: coords.clientY - 25, zIndex: i }}
          ></div>)
      })}
    </div>
  );
}

export default App;
