import ProjectInfo from "../assests/data/projectInfo.json";
import ProjectCard from "../components/ProjectCard";
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { motion } from "framer-motion";

import apiWeather from "../assests/img/projects/api-weather.png";
import bootstrapPorfolio from "../assests/img/projects/bootstrap-portfolio.png";
import teamGenerator from "../assests/img/projects/team-generator.png";
import readmeGenerator from "../assests/img/projects/readme-generator.png";
import workDay from "../assests/img/projects/day-planner.png";
import tastyfacts from "../assests/img/projects/tasty-facts.png";
import { Container } from "react-bootstrap";

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images = {
    "1": apiWeather,
    "2": bootstrapPorfolio,
    "3": teamGenerator,
    "4": readmeGenerator,
    "5": workDay,
    "6": tastyfacts
  }

  return (
    <motion.div 
    
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}>

    <Container className="" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="sectionHeading">Projects</h2>
              <p>These are my recent individual and group projects I am very happy about. Enjoy checking them out!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">

                {ProjectInfo.map((info) => (
                  <ProjectCard
                    key={info.title}
                    title={info.title}
                    deployedUrl={info.deployedUrl}
                    gitUrl={info.gitUrl}
                    image={images[info.id]}
                  />))}


              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Container>
    </motion.div>
  )
}