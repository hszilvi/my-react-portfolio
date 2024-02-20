import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

const ProjectCard = (props) => {
    return (
        <>
        <Card className='col-lg-3 col-md-6 col-sm-12 col-xs-12 me-2 mt-2 shadow d-flex justify-content-between' style={{ width: '18rem' }}>
          <Card.Img className="border shadow-sm" variant="top" src={props.image} alt={props.name}/>
          <Card.Body>
            <Card.Title className='fw-bolder mt-3 mb-5'>{props.name}</Card.Title>
            <Card.Text>
              {props.description}
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href={props.github} target='_blank'>Github</Card.Link>
            <Card.Link href={props.livelink} target='_blank'>Live link</Card.Link>
          </Card.Body>
        </Card>
      </>


    )
}

export default ProjectCard;