import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import projectList from '../../../projectList.json';
import DropDownProject from '../DropDownProject';
import { Link } from 'react-router-dom'

const NavTabs = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/"><span className="wave">👋</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav-element" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-element" href="/projectgallery">Project Gallery</Nav.Link>
                        <Nav.Link className="nav-element" href="https://1drv.ms/b/s!AjxelnH1mDmzlOwxM7rNjd1ZdZ0SHw?e=nFgb90" target='_blank'>Resume</Nav.Link>
                        <NavDropdown className="nav-element" title="Projects" id="collapsible-nav-dropdown">
                                {projectList.map((project) => {
                                    return (
                                        <Link to={project.url} className='dropdown-element'>
                                            <DropDownProject 
                                            key={project.id}
                                            id={project.id}
                                            name={project.name}
                                            url={project.url} 
                                            />
                                        </Link>

                                    )
                                })}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-element" href="/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavTabs;