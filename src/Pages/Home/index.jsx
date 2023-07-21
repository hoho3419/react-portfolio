import React from 'react';
import { Flex } from '../../style/boxstyle';
import { styled } from 'styled-components';
import { Left,Rigth } from '../../components'

const Home = () => {
  return (
    <FlexContainer>
      <Left/>
      <Rigth/>
    </FlexContainer>
  );
};

const FlexContainer = styled(Flex)`
  width: 100vw;
  max-width: 1600px;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #111;
  @media screen and (max-width: 768px){
    overflow-y: overlay;
    flex-direction: column;
  }
`;

export default Home;