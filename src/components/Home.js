// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assests/img/avatar3.jpeg";



export const Home = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>


                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! My name is Anna`} </h1>
                        <p> I am an extremely motivated aspiring Front End Web Developer. Innovative problem-solver passionate about technology innovations. Curiosity and creativity are my bullets. Enjoy having a trip through my portfolio.</p>
                        <a href="#about" type="button" className="btn btn-outline-light">Know me better!</a>


                    </Col>
                    <Col xs={12} md={6} xl={5}>


                        <img src={avatar} alt="Header Img" />


                    </Col>
                </Row>
            </Container>
        </section>
    )
}