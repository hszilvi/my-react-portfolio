// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import React, {useEffect} from 'react';

const DropDownProject = (props) => {
    // const [dropDownLinks, setDropDownLinks] = useState([]);
    // useEffect(() => {
    //     const dDLinks = [
    //         { name: props.name, path: `/${props.name.replace(/\s/g, "-")}`}
    //     ];
    //     setDropDownLinks(dDLinks);
    // }, []);
console.log(props.url)

    return (
        <>
            <NavDropdown.Item href={props.url}>{props.name}</NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Weather Forecast API</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Bootstrap Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Team Profile Generator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Password Generator</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Personal Website</NavDropdown.Item> */}
        </>
    )
}

export default DropDownProject;