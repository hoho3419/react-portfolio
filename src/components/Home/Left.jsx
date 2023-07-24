import React from 'react';
import { keyframes, styled } from 'styled-components';
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

const topBlock = keyframes`
  0%{
    left: -100%;
    top: -70%;
  }
  100%{
    left: -70%;
    top: -40%;
  }
`;
const botBlock = keyframes`
  0%{
    left: -100%;
    top: 60%;
  }
  100%{
    left: -70%;
    top: 40%;
  }
`;

const Section = styled.div`
  width: 30vw;
  position: relative;
  @media screen and (max-width: 768px){
    width: 100vw;
  }
`;

const ColorBlock1 = styled.div`
  animation: ${topBlock} .7s ease-in-out 0s;
  width: 100%;
  height: 100%;
  position: absolute;
  left: -70%;
  top: -40%;
  transform: rotate(40deg);
  background-color: ${primary};
  z-index: 99;
  @media screen and (max-width: 768px){
    animation: none;
    left: -60%;
    top: -40%;
    transform: rotate(-40deg);
  }
`
const ColorBlock2 = styled(ColorBlock1)`
  animation: ${botBlock} .7s ease-in-out 0s;
  position: absolute;
  left: -70%;
  top: 40%;
  transform: rotate(-40deg);
  @media screen and (max-width: 768px){
    animation: none;
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