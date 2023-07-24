import React from 'react';
import { styled } from 'styled-components';
import { Flex, primary, spacingMove, Line,DescBox,Stick } from '../../style/boxstyle';
import SkillItem from './SkillItem';
import { FaBuilding } from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import { Skills } from '../utils/Skills';
import { motion } from 'framer-motion';


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
          {Skills.map((el,idx) => (
            <SkillItem 
              key={el.id}
              id={idx}
              icon={el.icon}
              Title={el.Title}
              desc={el.desc}
            />
          ))}
        </SkillBox>
      </SectionContainer>
      <Line/>
      <SectionContainer>
        <h3 >Experience📕 & Education🎓</h3>
        <ExperEduBox>
          <ExEducation>
            <IconBox
              whileHover={{ y: [0,-20,0]}}
            >
              <FaBuilding />
            </IconBox>
            <TextBox>
              <Date><span>2023.01.26 ~ 2023.04.26</span></Date>
              <ProTitle>블록체인 기반 보안 프로젝트 <span> ㅡ 잇핀</span></ProTitle>
              <DescBox><Stick /> 보안 프로젝트를 진행하면서 대칭키와 비대칭키 등 다양한 보안에 네트워크 대한 이해도를 학습했습니다.</DescBox>
              <DescBox><Stick />프로젝트에 대한 회의를 진행할때 회의록을 작성하며 정보 기록 및 문서화, 커뮤니케이션 개선 능력을 향상시켰습니다.</DescBox>
              <DescBox><Stick /> C와  C++ 언어를 사용하며 정적타입 언어와 객체지향에 대해서 학습하였습니다.</DescBox>
            </TextBox>
          </ExEducation>
          <ExEducation>
            <IconBox
              whileHover={{ y: [0,-20,0]}}
            >
              <HiAcademicCap />
            </IconBox>
            <TextBox>
              <Date><span>2022.05 - 2023.01</span></Date>
              <ProTitle>반응형 UI /UX 웹콘텐츠 개발자 양성과정<span> ㅡ kh 정보 교육원</span></ProTitle>
              <DescBox><Stick />웹 프론트와 백엔드를 모두 경험하면서 들으며 웹 서비스 제작에 전체적인 이해도를 갖추었습니다.</DescBox>
              <DescBox><Stick />Java, Spring, Javascript, DB 등 다양한 언어와 도구를 사용하면서 웹 제작 능력을 향상 시켰습니다.</DescBox>
              <DescBox><Stick /> 팀 프로젝트와 개인프로젝트를 진행하며 웹 개발에 전체적인 이해와 gitflow 및 팀원들간에 커뮤니케이션을 학습했습니다.</DescBox>
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
    opacity: 0.07;
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
    margin: 2.5rem 0 5rem 0;
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
  flex-wrap: wrap;
  padding: 2.5rem 0;
  margin: 2.5rem 0;
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
  @media screen and (max-width: 768px){
    width: calc(100%);
  }
`;
const IconBox = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border-radius: 20rem;
  background-color: ${primary};
  display: flex;
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