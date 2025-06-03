import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGoals, deleteGoal } from './tasksSlice';
import { Card, Button } from 'react-bootstrap';

const TaskList = () => {
  const goals = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="task-list">
      {goals.map((goal) => (
        <Card key={goal.id} className="mb-3 goal-card">
          <Card.Body>
            <Card.Title>{goal.name}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {goal.description}<br />
              <strong>Due:</strong> {goal.dueDate}
            </Card.Text>
            <Button variant="danger" onClick={() => dispatch(deleteGoal(goal.id))}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
