import React from 'react';
import { styled } from 'styled-components'
import { primary } from '../../style/boxstyle';
import { Link, useLocation } from 'react-router-dom';
import { AiTwotoneHome,AiFillGithub } from 'react-icons/ai';
import { FaListAlt,FaUserAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = useLocation().pathname;

  return (
    <StyledHeader>
      <Navbar
        initial={{ opacity: 0, y: -50}}
        animate={{ opacity: 1, y: 0}}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: .5, delay: .5 }}
      >
        <StyledLink 
          to={'/'} 
          className={pathname === '/' ? 'active': ''}
        >
          <TitleNav>HOME</TitleNav>
          <AiTwotoneHome />
        </StyledLink>
        <StyledLink 
          to={'/about'} 
          className={pathname === '/about' ? 'active': ''}
        >
          <TitleNav>ABOUT</TitleNav>
          <FaUserAlt />
        </StyledLink>
        <StyledLink 
          to={'/projects'} 
          className={pathname === '/projects' ? 'active': ''}
        >
          <TitleNav>PROJECT</TitleNav>
          <FaListAlt />
        </StyledLink>
        <StyledLink 
          to={'https://github.com/hoho3419/'} 
          target='_blank'
        >
          <TitleNav>GITHUB</TitleNav>
          <AiFillGithub />
        </StyledLink>
      </Navbar>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  background-color: transparent;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
`;

const Navbar = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
  @media screen and (max-width: 600px){
    justify-content: flex-start;
    margin-top: 11rem;
  }
`;

const TitleNav = styled.span`
  font-size: 1.3  rem;
  font-weight: bold;
  padding-right: 0.75rem;
  display: inline-block;
  line-height: 1.2;
  transition: all 0.3s ease;
`;

const StyledLink = styled(Link)`
  background-color: transparent;
  position: relative;
  border: none;
  text-decoration: none;
  color : white;
  display: flex;
  align-items : center;
  padding: 1.1rem 1.3rem;
  border-radius: 30px;
  background: #2b2a2a;
  transition: all 0.2s;
  cursor: pointer;
  margin: 0 1.5rem;
  justify-content: right;
  svg{
    width: 1.7rem;
    height: 1.7rem;
  }
  &:hover {
    background-color:${primary};
    transform: translateX(-.8rem);
     ${TitleNav} {
      // hover한 StyledLink 컴포넌트 내부의 TitleNav에만 효과 적용
      color: #fff;
      transform: translateX(-10px);
    }
  }
  &.active{
    background-color: ${primary} ;
    pointer-events: none;
    transform: translateX(-.8rem);
  }
`;

export default Header;