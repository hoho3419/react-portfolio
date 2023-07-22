import React from 'react';
import { styled } from 'styled-components';
import { Flex, primary,DescBox,Stick } from '../../../style/boxstyle';
import { FaReact } from 'react-icons/fa'

const SkillItem = () => {
  return (
    <ItemBox>
      <IconBox>
        <FaReact /><span>: React</span>
      </IconBox>
      <DescBox>
        <Stick /> <span>리덕스를 사용하여 상태관리를 할 수 있습니다.글고 정말 잘할 ㅅ 있다</span>
      </DescBox>
      <DescBox>
        <Stick /> <span>리덕스를 사용하여 사용하여사용하여사용하여사용하여사용하여사용하여 상태관리를 할 수 있습니다.</span>
      </DescBox>
      <DescBox>
        <Stick /> <span>리덕스를 사용하여 사용하여사용하여사용하여 상태관리를 할 수 있습니다.</span>
      </DescBox>
    </ItemBox>
  );
};

export default SkillItem;

const ItemBox = styled(Flex)`
  width: calc(33% - 3rem);
  flex-direction: column;
  align-items: center;
  color: #ffffffcc;
  border: 1px solid #252525;
  padding: 1rem 1.2rem;
  box-sizing: border-box;
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
`;