import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import TaskList from './components/TaskList';
import './App.css'; // Para el CSS externo
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function App() {
  const [goals, setGoals] = useState([]);
  const [view, setView] = useState('tasks');

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const removeGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  return (
    <Container fluid className="app-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Goals App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setView('tasks')}>Tasks</Nav.Link>
            <Nav.Link onClick={() => setView('form')}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8}>
          {view === 'form' ? (
            <GoalForm addGoal={addGoal} />
          ) : (
            <TaskList goals={goals} removeGoal={removeGoal} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
