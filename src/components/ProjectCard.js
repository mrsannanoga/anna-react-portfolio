import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProjectCard = ({ title, deployedUrl, gitUrl, image }) => {
    return (

        <Card className='projectBody' style={{ width: '18rem' }}>
            <Card.Img nameClass="projectImage" variant="top" src={image} alt={title} />
            <Card.Body className='cardBody'>
                <Card.Title className='projectTitle'>{title}</Card.Title>
                <div className="cardButtons">
                    <Button href={gitUrl} variant="primary">GitHub</Button>
                    <Button href={deployedUrl} variant="primary">Deployment</Button>
                </div>

            </Card.Body>
        </Card>
    );

};

export default ProjectCard;