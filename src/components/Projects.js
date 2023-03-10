
import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
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

  return (
    <section className="[projects-section]" id="projects">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="sectionHeading">Projects</h2>
                        <p>These are my recent individual and group projects I am very happy about. Enjoy checking them out!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={''} alt="" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={''} alt="" /> */}
    </section>
  )
}