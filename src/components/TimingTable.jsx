import React, { useState } from "react";
import { Table, Button, Form } from 'react-bootstrap';

function TimingTable() {

  const initialData = [
    { id: 1, sailno: 123123, time: '00:00:00' },
  ];

  const [data, setData] = useState(initialData);
  const [nextId, setNextId] = useState(2); // Track the ID for the next row

  const addRow = () => {
    const newRow = { id: nextId, sailnum: '', time: '' };
    setData([...data, newRow]);
    setNextId(nextId + 1);
  };

  // Function to handle editing name
  const handleSailnumChange = (id, newSailnum) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, sailnum: newSailnum } : item
    );
    setData(updatedData);
  };

  // Function to handle setting current time in age field
  const handleTimeButtonClick = (id) => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    const updatedData = data.map(item =>
      item.id === id ? { ...item, age: currentTime } : item
    );
    setData(updatedData);
  };


  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sail Number</th>
            <th>Boat</th>
            <th>Finish Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <Form.Control
                    type="number"
                    value={item.sailno}
                    onChange={(e) => handleSailnumChange(item.id, e.target.value)}
                    />
              </td>
              <td>
                <Button variant="secondary" className="mr-2" onClick={(e) => handleTimeButtonClick(item.id)}>
                  Finish Now
                </Button>
                <Button variant="danger">Red Button</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={addRow} className="mb-3">
        Add New Time
      </Button>

    </div>
  );
}

export default TimingTable;
