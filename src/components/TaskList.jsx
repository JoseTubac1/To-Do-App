import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './TaskList.css'; // Para el CSS externo

const TaskList = ({ goals, removeGoal }) => {
  return (
    <div className="task-list">
      {goals.map((goal, index) => (
        <Card key={index} className="mb-3 goal-card">
          <Card.Body>
            <Card.Title>Name: {goal.name}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {goal.description}<br />
              <strong>Due Date:</strong> {goal.dueDate}
            </Card.Text>
            <Button variant="danger" onClick={() => removeGoal(index)}>
              Remove
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
