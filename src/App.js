import React from 'react';
import GoalForm from './components/GoalForm';
import TaskList from './features/tasks/TaskList';
import { Container, Row, Col, Navbar } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="app-container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>To-Do App</Navbar.Brand>
      </Navbar>
      <Row className="mt-4 justify-content-center">
        <Col md={6}>
          <GoalForm />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;