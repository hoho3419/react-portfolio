import React from 'react';
import { styled } from 'styled-components';
import { Flex } from '../../style/boxstyle';
import { ProjectPage } from '../../components';

const Project = () => {
  return (
    <ProjectContainer>
      <ProjectPage/>
    </ProjectContainer>
  );
};

export default Project;

const ProjectContainer = styled(Flex)`
  width: 100vw;
  max-width: 1600px;
  height: 100vh;
  overflow-y: overlay;
  overflow-x: hidden;
  background-color: #111;
  flex-direction: column;
  align-items: center;
  padding: 0 7rem;
  box-sizing: border-box;
  @media screen and (max-width: 768px){
    padding: 0 4rem;
  }
  @media screen and (max-width: 400px){
    padding: 0 1rem;
  }
`;