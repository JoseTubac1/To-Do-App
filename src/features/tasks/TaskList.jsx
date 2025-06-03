import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './tasksSlice';
import { Card, Button } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Card key={index} className="mb-3 goal-card">
          <Card.Body>
            <Card.Title>{task.name}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {task.description}<br />
              <strong>Due:</strong> {task.dueDate}
            </Card.Text>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteTask(index))}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;