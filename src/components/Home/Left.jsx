import React from 'react';
import { styled } from 'styled-components';
import { Flex,Img,primary } from '../../style/boxstyle';

const Left = () => {
  return (
    <Section>
      <ColorBlock1 />
      <ColorBlock2 />
      <ImgBox>
        <Img src='/assets/user.jpg'/>
      </ImgBox>
    </Section>
  );
};

export default Left;

const Section = styled.div`
  width: 30vw;
  position: relative;
  @media screen and (max-width: 768px){
    width: 100vw;
  }
`;

const ColorBlock1 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: -70%;
  top: -40%;
  transform: rotate(40deg);
  background-color: ${primary};
  z-index: 99;
  @media screen and (max-width: 768px){
    left: -60%;
    top: -40%;
    transform: rotate(-40deg);
  }
`
const ColorBlock2 = styled(ColorBlock1)`
  position: absolute;
  left: -70%;
  top: 40%;
  transform: rotate(-40deg);
  @media screen and (max-width: 768px){
    left: 60%;
    top: -40%;
    transform: rotate(40deg);
  }
`
const ImgBox = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 30px;
    height: 20rem;
    box-shadow: rgba(0, 0, 0, 0.9) 0px 0px 7px;
  }
`;