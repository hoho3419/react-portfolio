import React from 'react';
import { styled } from 'styled-components';
import { Flex, primary, spacingMove, Line,DescBox,Stick } from '../../style/boxstyle';
import SkillItem from './SkillItem';
import { FaBuilding } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <>
      <TitleBox>
        <Title>
          ABOUT<strong> ME</strong>
          <span>SKILLS</span>
        </Title>
      </TitleBox>
      <SectionContainer>
        <h3>My Skills📌</h3>
        <SkillBox>
          <SkillItem />
          <SkillItem />
          <SkillItem />
          <SkillItem />
          <SkillItem />
          <SkillItem />
        </SkillBox>
      </SectionContainer>
      <Line/>
      <SectionContainer>
        <h3>Experience📕 & Education🎓</h3>
        <ExperEduBox>
          <ExEducation>
            <IconBox>
              <FaBuilding />
            </IconBox>
            <TextBox>
              <Date><span>2019.08 - 2019.09</span></Date>
              <ProTitle>스마트웹&앱콘텐츠제작 <span> ㅡ 양성과정더조은컴퓨터학원</span></ProTitle>
              <DescBox><Stick /> GUI 디자인 가이드를 바탕으로 UI 구현 표준을 수립하고 UI를 제작하는 법을 학습하였습니다. 동시에 구현된 UI를 검증하기 위하여 사용성 테스트 계획, 수행, 분석, 결과 보고를 수행하는 역량을 길렀습니다.</DescBox>
            </TextBox>
          </ExEducation>
        </ExperEduBox>
      </SectionContainer>
    </>
  );
};

export default AboutPage;


export const TitleBox = styled.div`
  color: #fff;
  width: 100%;
  margin: 2.5rem 0;  
`;
export const Title = styled.h2`
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  position: relative;
  z-index: 99;
  strong{
    color: ${primary};
  };
  span{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 6.5rem;
    font-weight: 900;
    letter-spacing: 5rem;
    opacity: 0.1;
    animation: ${spacingMove} 1s ease-in-out .3s 1 normal forwards;
  }
`;
const SectionContainer = styled.section`
  width: 100%;
  h3{
    color: #fff;
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    margin: 2.5rem 0;
  }
`;
// Skills
const SkillBox = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;
`;
// Edcucation
const ExperEduBox = styled(Flex)`
  width: 100%;
`;
const ExEducation = styled(Flex)`
  width: calc(50%);
  flex-direction: column;
  color: #fff;
  padding: 0 2rem 0 5rem;
  margin-bottom: 5rem;
  box-sizing: border-box;
  &::before{
    content: "";
    width: 1px;
    height: 100%;
    background-color: #252525;
    position: absolute;
    left: 20px;
    top: 20px;
  }
`;
const IconBox = styled(Flex)`
  width: 3rem;
  height: 3rem;
  border-radius: 20rem;
  background-color: ${primary} ;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 10px;
  svg{
    width: 60%;
    height: 60%;
    color: #fff;
  }
`;
const TextBox = styled(Flex)`
  flex-direction: column;
  color: #fff;
`;
const Date = styled.div`
  color: #ffffffcc;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  span{
    border-radius: 30px;
    background-color: #252525;
    padding: 0.3rem 1rem;
    font-weight: 600;
  }
`;
const ProTitle = styled.p`
  color: #cfcfcf;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0.7rem 0 1.4rem 0;
  span{
    font-size: 1.2rem;
    color: #ffffff63;
    font-weight: 800;
  }
`;