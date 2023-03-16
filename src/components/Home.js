// import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assests/img/avatar3.jpeg";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";


export const Home = () => {
    return (
        <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            
                <Container className="banner" id="home">
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>


                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! My name is Anna`} </h1>
                            <p> I am an extremely motivated aspiring Front End Web Developer. Innovative problem-solver passionate about technology innovations. Curiosity and creativity are my bullets. Enjoy having a trip through my portfolio.</p>
                            <a href="skills" type="button">Know me better! <IoArrowForward size={25} /></a>


                        </Col>
                        <Col xs={12} md={6} xl={5}>


                            <img src={avatar} alt="Header Img" />


                        </Col>
                    </Row>
                </Container>
      
        </motion.div>
    )
}