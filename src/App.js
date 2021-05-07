import React from "react"
import "./App.css"
import { Container, Col, Row } from "react-bootstrap"
import Sidenav from "./components/Sidenav"
import Homepage from "./components/Homepage"
import Projects from "./components/Projectspage"
import { BrowserRouter as Router, Route } from "react-router-dom"

const routes = [
    { path: "/", exact: true, sidebar: () => <Sidenav />, main: () => <Homepage /> },
    { path: "/home", sidebar: () => <Sidenav />, main: () => <Homepage /> },
    { path: "/projects", sidebar: () => <Sidenav />, main: () => <Projects /> },
]

function App() {
    return (
        <Router>
            {/* //why div around container ? */}
            <div className="main-content-container vertical ">
                <Container fluid className="p-0 vertical">
                    <Row noGutters className="">
                        {/* sidenav */}
                        <Col
                            // xs={12}
                            // sm={12}
                            // md={2}
                            lg={3} //**can change sidenav width here**
                            xl={2}
                        >
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} exact={route.exact} component={route.sidebar} />
                            ))}
                        </Col>

                        {/* main content */}
                        <Col className="full-viewport overflow">
                            {routes.map((route, index) => (
                                <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    )
}

export default App
