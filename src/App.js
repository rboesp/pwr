import React from "react";
import './App.css';
import MainContent from "./components/MainContent";
// import Container from "react-bootstrap/Container";
import { Container, Col, Row } from "react-bootstrap";
import Sidenav from './components/Sidenav'

class App extends React.Component {
  state = {
    currentPage: 'Resume'
  }

  switchPage = page => {
      this.setState({currentPage: page})
  }

  render() {
    return <>
      {/* why div around container ? */}
      <div className="main-content-container vertical ">
        <Container fluid className='p-0 vertical'>
          <Row noGutters className=''>

            {/* sidenav */}
            <Col 
              // xs={12} 
              // sm={12} 
              // md={2} 
              lg={2} //**can change sidenav width here**
            >
              <Sidenav switchPage={this.switchPage}/>
            </Col>

            {/* main content */}
            <Col
              className='full-viewport overflow'
            >
              <MainContent currentPage={this.state.currentPage}/>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  }
}

export default App;
