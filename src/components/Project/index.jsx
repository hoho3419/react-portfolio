import React from 'react';
import { TitleBox, Title } from '../About';
import { styled } from 'styled-components';
import { Flex, Img, primary, DescBox, Stick, Line } from '../../style/boxstyle';
import { FaUser, FaCalendarAlt, FaBuilding } from 'react-icons/fa'
import { BiLogoTypescript,BiLogoJavascript,BiLogoRedux,BiLogoJquery } from 'react-icons/bi';
import { DiJqueryUiLogo } from 'react-icons/di'
import { FaReact, FaTools, FaLink, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiTailwindcss,SiStyledcomponents,SiNotion } from 'react-icons/si';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <>
      <TitleBox>
        <Title>
          My<strong> Projects </strong>
          <span>PROJECTS</span>
        </Title>
      </TitleBox>
      <ProjectBox>
        <IconBox>
          <Icon>
            <FaUser /> 100%
          </Icon>
          <Icon>
            <FaCalendarAlt /> 2022년 6월 8일 - 2023년 6월 26일
          </Icon>
          <Icon>
            <FaBuilding /> Toy
          </Icon>
        </IconBox>
        <h2>
          hshop 홈쇼핑 배달 웹 PROJECT
        </h2>
        <Stack>
          <span><BiLogoTypescript />Typescript</span>
          <span><FaReact />React</span>
          <span><FaTools />Recoil</span>
          <span><SiFirebase />Firebase</span>
          <span><SiTailwindcss />Tailwind Css</span>
          <span><FaTools />react-toastify</span>
        </Stack>
        <Desc>
          홈쇼핑 배달 웹 입니다. <br />
          집에서 가장 가까운 물품 저장소에 있는 물건들을 주문해서 가장 빠른 시일 내에 받을 수 있는 웹 서비스 입니다.<br />
          Firebase SDK를 사용해서 서버리스 아키텍처를 도입했고, google Map을 사용하여 위치 기반 서비스도 기능도 추가 했으며 호스팅까지 완료하였습니다.
        </Desc>
        <LinkBox>
          <span><FaLink /><Link to={'https://hshop-18d5d.firebaseapp.com/'} target='_blank'>hShop</Link></span>
          <span><FaGithub /><Link to={'https://github.com/hoho3419/hshop'} target='_blank'>Github</Link></span>
        </LinkBox>
        <FuncBox>
          <h2>Function List 📌</h2>
          <DescBox>
            <Stick /> <span>회원가입</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>로그인,로그아웃</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>구글 로그인</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>장바구니(추가,수정,삭제)</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>프로필 변경 (유저 데이터 변경)</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>상품 목록 Pagination</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>Google Map API</span>
          </DescBox>
        </FuncBox>
        <Info>
          <p className='title'>hShop 🚴‍♂️<span>UI/UX</span></p>
          <Img src='assets/UIUX.gif' alt='UIUX gif 파일'/>
        </Info>
        <ProblemSolverBox>
          <p>문제</p>
          <ProblemSolver>
            <DescBox>
              <Stick /> <span>firebase SDK의 <strong className='red'>아키텍처에 대한 이해도</strong></span>
            </DescBox>
            <DescBox>
              <Stick /> <span>Redux 도입 및 설정으로 인한 <strong className='red'> 개발 생산성 문제</strong> 및 <strong className='red'>리렌더링</strong> </span>
            </DescBox>
            <DescBox>
              <Stick /> <span>css 파일로 인해 많아지는 파일과 <strong className='red'> 장황한 css</strong> 작성</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>파일 내 많은 <strong className='red'> import 구문</strong></span>
            </DescBox>
            <DescBox>
              <Stick /> <span>css 로 구현하는 <strong className='red'>애니메이션 구현의</strong> 한계</span>
            </DescBox>
          </ProblemSolver>
          <p>해결</p>
          <ProblemSolver>
            <Img src='assets/fire.png' alt='UIUX gif 파일'/>
            <DescBox>
              <Stick /> <span>Firebase의 <strong className='blue'>아키텍처를 그려가며</strong>  전반적인 기능 이해도를 넓혀 나갔습니다.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>recoil을 활용해 해당 <strong className='blue'>개발 생산성 상승</strong>  및 <strong className='blue'>구독된 컴포넌트만 리렌더링 </strong> 하기 때문에 리렌더링 이슈가 해결되었습니다.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span><strong className='blue'>Tailwind css</strong> 를 도입하여 css-in-js 를 적용했고, <strong className='blue'>미리 정의된 클래스로</strong> 일관된 디자인 및 반응형 구문을 사용하며 <strong className='blue'>간결한 css</strong> 작성을 하였습니다.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>컴포넌트의 <strong className='blue'>상위 폴더 내부에 index 파일을</strong> 만들어 내부의 각 컴포넌트들 export 하고, 사용하는 파일에서 <strong className='blue'>import구문을 한번만 사용</strong>해도 여러 컴포넌트를 불러올 수 있게 구성했습니다.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span><strong className='blue'>framer-motion 을</strong> 적용해서 간단하게 <strong className='blue'>역동적인 애니메이션을</strong> 구현했고, GPU 사용으로 <strong className='blue'>성능 최적화</strong> 되어 더 부드러운 효과로 구현하였습니다.</span>
            </DescBox>
          </ProblemSolver>
        </ProblemSolverBox>
      </ProjectBox>
      <Line />
      <ProjectBox>
        <IconBox>
          <Icon>
            <FaUser /> 100%
          </Icon>
          <Icon>
            <FaCalendarAlt /> 2023년 01월 10일 ~ 2023년 01월 15일
          </Icon>
          <Icon>
            <FaBuilding /> Toy
          </Icon>
        </IconBox>
        <h2>
          React Eggdrop
        </h2>
        <Stack>
          <span><BiLogoJavascript />Javascript</span>
          <span><FaReact />React</span>
          <span><BiLogoRedux />Redux</span>
          <span><SiFirebase />Firebase</span>
          <span><SiStyledcomponents />Styled-components</span>
        </Stack>
        <Desc>
          React로 만든 Eggdrop 페이지 입니다. <br />
          기존 MPA 방식으로 만든 웹 사이트를 SPA 방식으로 만들었습니다.<br />
          Firebase 를 사용해서 호스팅까지 완료 하였습니다.
        </Desc>
        <LinkBox>
          <span><FaLink /><Link to={'https://eggdrop-e3ed5.firebaseapp.com/'} target='_blank'>hShop</Link></span>
          <span><FaGithub /><Link to={'https://github.com/hoho3419/React_eggdrop'} target='_blank'>Github</Link></span>
        </LinkBox>
        <FuncBox>
          <h2>Function List 📌</h2>
          <DescBox>
            <Stick /> <span>찜하기 (추가,수정,삭제)</span>
          </DescBox>
        </FuncBox>
        <Info>
          <p className='title'>React Eggdrop 🍳<span>UI/UX</span></p>
          <Img src='assets/Egg.gif' alt='UIUX gif 파일'/>
        </Info>
        <ProblemSolverBox>
          <p>문제</p>
          <ProblemSolver>
            <DescBox>
              <Stick /> <span>Context API 사용으로 <strong className='red'> 전체 렌더링 이슈로</strong> 서비스 속도가 느려짐</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>CSS 모듈을 사용으로 작은 어플리케이션인데도 불구하고 <strong className='red'>파일이 많고 복잡</strong>.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>페이지가 새로고침이 되면 찜하기 된<strong className='red'> 데이터 초기화</strong></span>
            </DescBox>
          </ProblemSolver>
          <p>해결</p>
          <ProblemSolver>
            <DescBox>
              <Stick /> <span>각 상태관리 방법의 <strong className='blue'>아키텍처,특징,장점,단점</strong> 을 파악해서 고려한 뒤 redux를 적용해서 전체 렌더링에 대한 이슈 해결 </span>
            </DescBox>
            <DescBox>
              <Stick /> <span>CSS-in-js 방식인 <strong className='blue'>styled-components</strong> 를 도입해서 파일 축소와<strong className='blue'> CSS 스타일 재사용성</strong>을  높임.</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>브라우저에 <strong className='blue'>localstorage 공간을</strong> 사용하여 사용자가 찜한 데이터 명시적으로 삭제하기 전까지 저장.</span>
            </DescBox>
          </ProblemSolver>
        </ProblemSolverBox>
      </ProjectBox>
      <Line />
      <ProjectBox>
        <IconBox>
          <Icon>
            <FaUser /> 20%
          </Icon>
          <Icon>
            <FaCalendarAlt /> 2022년 11월 29일 ~ 2022년 12월 8일
          </Icon>
          <Icon>
            <FaBuilding /> Team Project
          </Icon>
        </IconBox>
        <h2>
          Arton
        </h2>
        <Stack>
          <span><BiLogoJavascript />Javascript</span>
          <span><BiLogoJquery />Jquery</span>
          <span><DiJqueryUiLogo />JqueryUI</span>
          <span><FaGithub />Github</span>
          <span><SiNotion />Notion</span>
        </Stack>
        <Desc>
          Arton 공연 소개 및 예약 웹 어플리케이션 <br />
          팀 프로젝트로 프론트 3 백엔드 2로 역할 분담 하였고 Front와 코드 버전관리를 담당하였습니다.<br />
          직관적으로 공연 정보를 확인할 수 있고, 구매가 편리한 공연 티켓 판매 사이트 구현 하였습니다.<br />
          git/github, notion 을 통해 버전관리와 일정관리를 하였습니다.
        </Desc>
        <LinkBox>
          <span><FaLink /><Link to={'https://hoho3419.github.io/arton-final-/'} target='_blank'>hShop</Link></span>
          <span><FaGithub /><Link to={'https://github.com/hoho3419/arton-final-'} target='_blank'>Github</Link></span>
          <span><SiNotion /><Link to={'https://harmless-patio-fe8.notion.site/ARToN-6b34bf3422d541c5aaa228600b7bb4aa'} target='_blank'>Notion</Link></span>
        </LinkBox>
        <FuncBox>
          <h2>Function List 📌</h2>
          <DescBox>
            <Stick /> <span>Slide,tab 등 하드 코딩으로 기능 구현</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>index.html,rank.html,search.html 총 3페이지 구현</span>
          </DescBox>
          <DescBox>
            <Stick /> <span>반응형 웹 사이트로 구현</span>
          </DescBox>
        </FuncBox>
        <Info>
          <p className='title'>Arton 🎬<span>UI/UX</span></p>
          <Img src='assets/Arton.gif' alt='UIUX gif 파일'/>
        </Info>
        <ProblemSolverBox>
          <p>문제</p>
          <ProblemSolver>
            <DescBox>
              <Stick /> <span>많은 요구사항과 <strong className='red'>짧은 일정</strong>으로 인한 일정 지연</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>rank 페이지 공연 날짜 조회에 필요한<strong className='red'> 달력 UI 기능</strong> 구현에 대한 한계</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>github 코드 버전관리 <strong className='red'>Merge 시 충돌</strong> 발생</span>
            </DescBox>
          </ProblemSolver>
          <p>해결</p>
          <ProblemSolver>
            <DescBox>
              <Stick /> <span>팀원들과 <strong className='blue'>온라인 및 오프라인 회의를 통해</strong>  일정 재조율 및 팀원들과 관계 향상</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>JqueryUI 인<strong className='blue'> datepicker</strong>  를 사용하여 공연 날짜 조회 기능 구현</span>
            </DescBox>
            <DescBox>
              <Stick /> <span>로컬 <strong className='blue'>브랜치 갱신</strong> 후 충돌이 발생한 파일을 열고<strong className='blue'> 충돌 부분을</strong> 수정</span>
            </DescBox>
          </ProblemSolver>
        </ProblemSolverBox>
      </ProjectBox>
    </>
  );
};

export default ProjectPage;

const ProjectBox = styled(Flex)`
  width: 100%;
  color: #fff;
  flex-direction: column;
  border: 1px solid #252525;
  border-radius: 30px;
  padding: 4rem;
  box-sizing: border-box;
  h2{
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
  }
`;
const IconBox = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  gap: 1.25rem;
`
const Icon = styled(Flex)`
  font-size: 0.9rem;
  gap: 0.5rem;
  align-items: center;
  font-weight: 600;
  svg{
    font-size: 1.4rem;
    color: ${primary};
  }
`;

const Stack = styled(Flex)`
  gap: 0.3rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  span{
    border: 1px solid #fff;
    padding: 2px 4px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    svg{
      color: ${primary};
      font-size: 1.2rem;
    }
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
`;

const LinkBox = styled(Flex)`
  font-size: 1.2rem;
  gap: .5rem;
  span{
    display: flex;
    align-items: center;
    gap: .5rem;
    font-weight: 600;  
    a{
      text-decoration: none;
      outline: none;
      color: #fff;
      &:hover{
        color: ${primary};
      }
    }
    svg{
      color: ${primary};
    }
  }
`;

const Info = styled(Flex)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin-bottom: 5rem;
  & .title{
    font-size: 2rem;
    font-weight: 800;
  }
  & span{
    color: ${primary};
  }
`;

const FuncBox = styled(Flex)`
  flex-direction: column;
  justify-content: left;

  h2{
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  };
  div{
    font-weight: 700;
  }
`;

const ProblemSolverBox = styled(Flex)`
  flex-direction: column;
  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: underline;
  }
  & .blue{
    color: ${'#00b4ff'};
  }
  & .red {
    color: ${primary};
  }
`;

const ProblemSolver = styled(Flex)`
  flex-direction: column;
  padding-left: 3rem;
  box-sizing: border-box;
`;