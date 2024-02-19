import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const ProjectCard = (props) => {
    return (
        <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={props.image} alt={props.name}/>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
          </Card.Body>
          {/* <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup> */}
          <Card.Body>
            <Card.Link href={props.github} target='_blank'>Github</Card.Link>
            <Card.Link href={props.livelink} target='_blank'>Live link</Card.Link>
          </Card.Body>
        </Card>
      </>


    )
}

export default ProjectCard;