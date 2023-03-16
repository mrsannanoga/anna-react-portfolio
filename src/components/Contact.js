import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { Container } from "react-bootstrap";


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jfpyw7b', 'template_zmpkdx4', form.current, 'OktYbb2RfItbtl4qb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };
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

        <Container className="container">
          <div className="row">
            <div className="col-12">
              <div className="">
                <h2 className="sectionHeading">Contact me</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3 pt-0">
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className="inputShadow px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="inputShadow px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <textarea
                      placeholder="Your message"
                      name="message"
                      className="inputShadow px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <button
                      className="contactButton"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </Container>
      
    </motion.div>
  )
}