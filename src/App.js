import React from "react";
import './App.css';
import MainContent from "./components/MainContent";
// import Container from "react-bootstrap/Container";
import { Container, Col, Row } from "react-bootstrap";
import Sidenav from './components/Sidenav'

class App extends React.Component {
  state = {}

  render() {
    return <>
      <div className="main-content-container">
        <Container fluid className='p-0'>
          <Row noGutters>
            <Col 
              xs={12} 
              sm={3} 
              md={4} 
              lg={4} 
            >
              <Sidenav/>
            </Col>
            <Col
              xs={12} 
              sm={9} 
              md={8} 
              lg={8}
            >
              <MainContent/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  }
}

export default App;
