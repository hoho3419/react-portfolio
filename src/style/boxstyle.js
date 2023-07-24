import styled,{ keyframes } from 'styled-components';
// color
export const primary = '#ff4500';
// animation

export const spacingMove = keyframes`
  0%{
    letter-spacing: 5rem;
  };
  100%{
    letter-spacing: 1.25rem;
  }
`;

export const Flex = styled.div`
  display:flex;
  position: relative;
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-y: overlay;
  overflow-x: hidden;
`;

export const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

export const Line = styled.div`
  width: 60vw;
  padding: 1px 0;
  background-color: #252525;
  margin: 10rem 0;
`;

export const DescBox = styled(Flex)`
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: left;
  padding-left: 2rem;
  box-sizing: border-box;
  margin-bottom: 1.2rem;
  gap: 1rem;
  line-height: 1.6rem;
  @media screen and (max-width: 1200px) {
      font-size: 1.4rem;
      line-height: 2rem;
  }

  @media screen and (max-width: 600px){
    font-size: 1.2rem;
  }
`;

export const Stick = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 20px;
  height: 2px;
  background-color: ${primary};
`;
