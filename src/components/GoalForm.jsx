import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../features/tasks/tasksSlice';
import { Form, Button } from 'react-bootstrap';

const GoalForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal({ name, description, dueDate }));
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <Form onSubmit={handleSubmit} className="goal-form">
      <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
      <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="mb-2" />
      <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="mb-2" />
      <Button type="submit" variant="primary" className="w-100">Add Goal</Button>
    </Form>
  );
};

export default GoalForm;
