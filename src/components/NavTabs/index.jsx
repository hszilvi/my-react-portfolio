import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import projectList from '../../../projectList.json';
import DropDownProject from '../DropDownProject';

const NavTabs = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><span className="wave">👋</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/projectgallery">Project Gallery</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                        <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                                {projectList.map((project) => {
                                    return (
                                        <DropDownProject 
                                        id={project.id}
                                        key={project.id}
                                        name={project.name} />

                                    )
                                })}

                        {/* <NavDropdown.Item href="#action/3.1">World Recipe</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Weather Forecast API</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Bootstrap Portfolio</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Team Profile Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Password Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Personal Website</NavDropdown.Item> */}
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                        </Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavTabs;