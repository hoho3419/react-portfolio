import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact,FaGitSquare,FaVuejs } from 'react-icons/fa';
import { SiJquery,SiHtml5 } from 'react-icons/si'


export const Skills = [
  {
    id: 1,
    icon: <FaReact />,
    Title: 'React',
    desc: [
      'React와 Typescript를 사용해서 정적 타입 체크를 통한 코드의 안정성을 높이고 코드 가독성과 유지보수성을 높인 경험이 있습니다.',
      'styled-components, Tailwind css, aos 등 다양한 스타일링 방법과 라이브러리를 학습하고 hshop, Eggdrop 프로젝트에 사용하며 성장하고 있습니다.',
      'Context API, Redux, Recoil을 활용한 경험이 있으며, 이를 통해 상태 관리 아키텍처에 대한 이해를 갖추었고, 다양한 프로젝트에 적절한 상태 관리 방식을 적용하여 데이터 흐름을 효율적으로 제어할 수 있습니다'
    ]
  },
  {
    id: 2,
    icon: <BiLogoJavascript />,
    Title: 'Javascript',
    desc: [
      'ES6와 이후의 자바스크립트 문법을 사용하여 웹 제작을 한 경험이 있습니다.',
      'Vanilla JS를 사용하여 간단한 웹 제작이 가능하고 필요 이유에 대해 충분히 이해하고 있습니다.',
      'Swiper, Bootstrap등 다양한 플러그인을 학습하고 있으며 프로젝트에 사용 경험이 있습니다.'
    ]
  },
  {
    id: 3,
    icon: <SiJquery />,
    Title: 'Jquery',
    desc: [
      '다양한 속성과 메소드를 사용하여 slide, tab, scroll 기능 등 다양한 기능 개발이 가능합니다.',
      'Ajax을 활용하여 비동기 통신으로 데이터 요청을 할 수 있습니다.',
      'jQuery UI 라이브러리를 활용해서 팀 프로젝트인 Arton 웹 제작을 해본 경험이 있습니다.'
    ]
  },
  {
    id: 4,
    icon: <SiHtml5 />,
    Title: 'HTML/CSS',
    desc: [
      '웹 사이트 제작시 W3C에 웹표준 검사를 통해 웹 접근성 및 유지보수성을 향상 시킨 경험이 있습니다.',
      'HTML 작성시 시멘틱 태그를 사용하며 코드 가독성을 향상 시키고 유지보수를 용이하게 합니다.',
      '웹 개발시 미디어 쿼리를 이용하여 반응형 웹사이트를 구축하고 다양한 기기 지원 및 유지보수를 편리하게 합니다.'
    ]
  },
  {
    id: 5,
    icon: <FaGitSquare />,
    Title: 'Git/Github',
    desc: [
      '팀 프로젝트인 Arton을 제작하면서 Git GUI인 Sourcetree를 이용해서 코드 버전관리를 하였습니다.',
      '프로젝트 경험으로 인해 git flow가 무엇인지 알고 있으며 왜 사용해야 하는지 이해하고 있습니다.',
      'git Stash, Git Rebase 기능이 무엇인지, 왜 사용해야 하는지에 이해하고 있습니다.'
    ]
  },
  {
    id: 6,
    icon: <FaVuejs />,
    Title: 'Vue',
    desc: [
      'option API와 Composition API에 대한 차이를 이해하고 있으며 알맞게 사용 가능합니다.',
      'Vue 강의와 공식문서들을 통해 웹 사이트 제작 경험이 있습니다.',
      'vuex 를 이용해서 전역상태 관리가 가능합니다.'
    ]
  },
]