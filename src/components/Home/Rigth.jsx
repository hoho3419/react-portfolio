import React from 'react';
import { styled } from 'styled-components';
import { Flex,primary } from '../../style/boxstyle';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Rigth = () => {
  return (
    <Section>
      <HeadTitle
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: .5 }}
      >
        I'M<span> FRONT-END DEVELOPER</span>
      </HeadTitle>
      <TitleBox>
        <p>안녕하세요!😀 저는 프론트엔드 개발자 이철호 입니다.</p>
        <span>호기심이 많아 새로운 프레임워크나⚒ 라이브러리에📕 대해서 탐구하고 사용하며, 항상 "왜?"❓라는 질문을 통해 전체적인 프로세스에 대해 이해하고 성장하는 것을 중요시하고 있습니다.</span>
      </TitleBox>
      <PerTitle>PERSONAL INFOS</PerTitle>
      <PerBox>
        <div>
          Name: <span>이철호</span>
        </div>
        <div>
          Age: <span>23, 2000</span>
        </div>
        <div>
          Phone: <span>010-2387-3281</span>
        </div>
        <div>
          Address: <span>서울시 강서구</span>
        </div>
        <div>
          Email: <span>hoho3419@naver.com</span>
        </div>
      </PerBox>
      <Button to={'/about'}>About me</Button>
    </Section>
  );
};

export default Rigth;

const Section = styled(Flex)`
  width: 70vw;
  padding: 8rem 10rem;
  box-sizing: border-box;
  flex-direction: column;
  @media screen and (max-width: 768px){
    width: 100vw;
    padding: 4rem 6rem;
  }
  @media screen and (max-width: 420px){
    padding: 1rem 3rem;
  }
`;

const HeadTitle = styled(motion.h1)`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #fff;
  span{
    font-size: 2.8rem;
    font-weight: bold;
    color: ${primary};
  }
`;

const TitleBox = styled.div`
  font-size: 1.3rem;
  max-width: 670px;
  padding-right: 5rem;
  line-height: 1.6rem;
  color: #fff;
  font-weight: 600;
  word-break: keep-all;
  margin-bottom: 2rem;
  p{
    margin: 0;  
  }
  span{
  }
`;

const PerTitle = styled.h2`
  font-size: 1.8rem;
  color: white;
  font-weight: 500;
`;

const PerBox = styled.div`
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  div{
    display: flex;
    justify-content: left;
    gap: 1.25rem;
  }
  span{
    color: ${primary};
  }
`;

const Button = styled(Link)`
  border: none;
  text-decoration: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: 800;
  color: #fff;
  background-color: ${primary};
  border-radius: 30px;
  padding: 1rem 0;
  transition: all 0.2s ease-in-out;
  &:hover{
    background-color: #fff;
    color: ${primary};
  }
`;