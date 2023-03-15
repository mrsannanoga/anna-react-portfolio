import Card from 'react-bootstrap/Card';


const ProjectCard = ({ title, deployedUrl, gitUrl, image }) => {
    return (

        <Card className='projectBody' style={{ width: '18rem' }}>
            <Card.Img className="projectImage" variant="top" src={image} alt={title} />
            <Card.Body className='cardBody'>
                <Card.Title className='projectTitle'>{title}</Card.Title>
                <div className="cardButtons">
                    <a className='cardButton' href={gitUrl} variant="primary">GitHub</a>
                    <a className='cardButton' href={deployedUrl} variant="primary">URL</a>
                </div>

            </Card.Body>
        </Card>
    );

};

export default ProjectCard;