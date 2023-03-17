import React from 'react';
import styled from 'styled-components';
import { Container} from 'react-bootstrap'


const Footer = styled.div`
background: linear-gradient(90.21deg, rgba(5, 53, 244, 0.5) -5.91%, rgba(172, 163, 213, 0.5) 111.58%);
width:100%;
`
// const Container = styled.div`
// font-size: 1rem;
// position: absolute;
// bottom: 0;
// width: 100%;
// height: 5rem;   
// `


export const Foot = () => {
  return (
    <Footer className='text-center text-white '>
      <Container className='container-fluid p-4'>
        <div className='text-center'>
        © 2023 Copyright: All rights reserved.
        </div>
        </Container>
    </Footer>
  );
}