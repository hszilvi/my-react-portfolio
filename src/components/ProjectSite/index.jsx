import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectSite = (props) => {
    return (
    <>
          <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            <h2>{props.name}</h2>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <h3>Built with: {props.description}</h3>
          </Card.Text>
          <Button variant="dark">Github</Button>
          <Button variant="danger">Livelink</Button>
        </Card.Body>
      </Card>

    </>
    )
}

export default ProjectSite;