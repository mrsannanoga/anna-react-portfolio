import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Projects = () => {
    return (
     
      
      
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Button variant="primary">GitHub</Button>
              <Button variant="primary">Deployment</Button>
            </Card.Body>
          </Card>
        );
      
}