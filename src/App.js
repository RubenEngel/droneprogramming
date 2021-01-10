import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import io from 'socket.io-client';

function App() {

    // const socket = io();

    // const [flightStatus, setFlightStatus] = useState('Flight not started')
    // const [count, setCount] = useState(0)

    // function startFlight() {
    //   axios({
    //     method: 'get',
    //     url: '/flight',
    //   }).then(res => setFlightStatus(res.data.test))
    //   .catch(err => console.log(err));
      
    //   socket.emit("start");
    // }

      // socket.on('elapsed time', (data) => {
      //       setCount(data.count)
      //     })
    
      const [currentTime, setCurrentTime] = useState(0);

      useEffect(() => {
        fetch('/api/time').then(res => res.json()).then(data => {
          setCurrentTime(data.time);
        });
      }, []);

  return (
    <div className="App">
      <header className="App-header">

        <h1>Seed Planting IoT Drone</h1>

        <Form>
          <Form.Label>Drop Height</Form.Label>
          <Form.Control type="number" step="1"/>
          <Form.Label>Drop Columns</Form.Label>
          <Form.Control type="number" step="1"/>
          <Form.Label>Drop Rows</Form.Label>
          <Form.Control type="number" step="1"/>
        </Form>
        <Button onClick={startFlight} variant="warning">Start Flight</Button>
        <h3>{currentTime}</h3>

      </header>
    </div>
  );
}

export default App;


