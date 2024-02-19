// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const DropDownProject = (props) => {
    return (
        <>
            <NavDropdown.Item href={`/${props.name.replace(/\s/g, "-")}`}>{props.name}</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Weather Forecast API</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Bootstrap Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Team Profile Generator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Password Generator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Personal Website</NavDropdown.Item> */}
        </>
    )
}

export default DropDownProject;