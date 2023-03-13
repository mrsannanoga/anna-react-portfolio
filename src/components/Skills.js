import React from "react";
import resume from "../assests/resume/anna-noga-resume.pdf"
import { GoCloudDownload } from "react-icons/go";
import { motion } from "framer-motion";


export const Skills = () => {
    return (
        <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >


            <section className="skills-section text-center" id="skills">
                <h2 className="sectionHeading text-center"> Skills</h2>
                <div className="container-fluid">
                    <div className="row">
                        <div className="cardContainer cardSection col-sm-12 col-md-3 col-lg-3">
                            <div className="card-body skillsbody">
                                <h5 className="card-title">Front-end fundamentals</h5>
                                <div className="card-text">
                                    <ul className="skills-list">
                                        <li>HTML</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                        <li>UX</li>
                                        <li>Git</li>
                                        <li>GitHub</li>
                                        <li>Information Architecture</li>
                                        <li>User experience design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cardContainer cardSection col-sm-12 col-md-3 col-lg-3">
                            <div className="card-body skillsbody">
                                <h5 className="card-title">Modern front-end frameworks</h5>
                                <div className="card-text">
                                    <ul className="skills-list">
                                        <li>Structuring, positioning, and optimisation of web page content</li>
                                        <li>React. js</li>
                                        <li>Netlify</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="cardContainer cardSection col-sm-12 col-md-3 col-lg-3">
                            <div className="card-body skillsbody">
                                <h5 className="card-title">Developing with APIs</h5>
                                <div className="card-text">
                                    <ul className="skills-list">
                                        <li>Javascript framework</li>
                                        <li>DOM manipulation</li>
                                        <li>Web-based
                                            applications</li>
                                        <li>Data extraction and retrieval</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <hr />


                            <a className="resumeButton" href={resume} type="button">DOWNLOAD RESUME <GoCloudDownload size={25} />


                            </a>
                        </div>
                    </div>
                </div>


            </section>
        </motion.div>
    )
}