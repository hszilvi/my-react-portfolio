import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectSite = ({props}) => {
    return (
    <>
      <Card>
        <h2 className='fw-bold mb-5 h1'>{props.name}</h2>
        <Card.Img variant="top" src={props.image} alt={props.image} className='border shadow'/>
        <Card.Body>
          <Card.Text>
            <p className='fw-normal mb-5 text-left'>{props.description}</p>
            <p><span className='fw-bold mt-5 mb-5 me-2'>Built with:</span> {props.build}</p>
          </Card.Text>
          <Button className='mt-5' variant="dark" href={props.github} target='_blank'>Github</Button>
        </Card.Body>
      </Card>
    </>
    )
}

export default ProjectSite;