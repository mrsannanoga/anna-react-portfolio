import React from 'react';
import styled from 'styled-components';



const Footer = styled.div`
margin-top: 15%;
background: linear-gradient(90.21deg, rgba(5, 53, 244, 0.5) -5.91%, rgba(172, 163, 213, 0.5) 111.58%);
`
const Container = styled.div`
padding: 1rem;
font-size: 2rem;
display: flex;
justify-content: space-around;
`


export const Foot = () => {
  return (
    <Footer className='text-center text-white'>
      <Container className='p-4'>
        <div className='text-center'>
        © 2023 Copyright: All rights reserved.
        </div>
        </Container>
    </Footer>
  );
}