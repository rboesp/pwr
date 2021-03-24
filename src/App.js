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
      <div className="main-content-container vertical ">
        <Container fluid className='p-0 vertical'>
          <Row noGutters className=''>
            <Col 
              // xs={12} 
              // sm={12} 
              // md={4} 
              lg={3} 
              className=''
            >
              <Sidenav/>
            </Col>
            <Col
              // xs={12} 
              // sm={9} 
              // md={9} 
              // lg={9}
              className='full-viewport overflow'
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
