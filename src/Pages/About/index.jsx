import React from 'react';
import { styled } from 'styled-components';
import { Flex } from '../../style/boxstyle';
import { AboutPage } from '../../components';

const About = () => {
  return (
    <FlexContainer>
      <AboutPage />
    </FlexContainer>
  );
};

export default About;

const FlexContainer = styled(Flex)`
  width: 100vw;
  max-width: 1600px;
  height: 100vh;
  overflow-y: overlay;
  overflow-x: hidden;
  background-color: #111;
  flex-direction: column;
  align-items: center;
  padding: 0 5rem;
  box-sizing: border-box;
`;
