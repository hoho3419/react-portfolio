import React from 'react';
import { styled } from 'styled-components';
import { Flex, primary,DescBox,Stick } from '../../../style/boxstyle';
import { motion } from 'framer-motion';

const SkillItem = ({ id,icon,Title,desc }) => {
  return (
    <ItemBox
      whileHover={{ borderColor:primary, y: -20 }}
    >
      <IconBox>
        { icon }<span>: {Title}</span>
      </IconBox>
      {desc.map((el,idx) => (
        <DescBox key={idx}>
          <Stick /> <span>{el}</span>
        </DescBox>
      ))}
    </ItemBox>
  );
};

export default SkillItem;

const ItemBox = styled(motion.div)`
  width: calc(33% - 3rem);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #ffffffcc;
  border: 1px solid #252525;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
  @media screen and (max-width: 950px){
    width: calc(50% - 3rem);
  }
  @media screen and (max-width: 600px){
    width: calc(100%);
    padding: 3rem 1.2rem;
  }
`;

const IconBox = styled(Flex)`
  font-size: 2rem;
  gap: 1.25rem;
  font-weight: 500;
  align-items: center;
  margin-bottom: 1rem;
  svg {
    color: ${primary};
  }
  @media screen and (max-width: 600px){
    font-size: 3rem;
  }
`;