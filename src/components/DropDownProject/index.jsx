import NavDropdown from 'react-bootstrap/NavDropdown';

const DropDownProject = (props) => {
    return (
        <>
                <NavDropdown.Item href={props.url}>{props.name}</NavDropdown.Item>
        </>
    )
}

export default DropDownProject;