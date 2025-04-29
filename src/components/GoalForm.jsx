import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './GoalForm.css'; // Para el CSS externo

const GoalForm = ({ addGoal }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal({ name, description, dueDate });
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <Form onSubmit={handleSubmit} className="goal-form">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="add-goal-btn">
        ADD GOAL
      </Button>
    </Form>
  );
};

export default GoalForm;
