import { createProjectsBatch } from "./projects";
import { Project } from "./types";

export const seedProjects = async () => {
  if (process.env.NODE_ENV !== "development") {
    console.warn("❌ seed는 개발환경에서만 실행하세요");
    return;
  }

  const data: Project[] = [
    {
      id: "1",
      name: "RECO CINEMA",
      state: "2026.04",
      gitCode: "https://github.com/hyunseok9898/",
      gitLink: "https://onbite-cinema-app-router.vercel.app/",
      category: "next",
      img: "hyunseok-log",
      skill: ["Next", "React", "TypeScript", "Supabase", "api"],
      text: "Next 활용한 영화 추천&검색 사이트 입니다",
    },
    {
      id: "2",
      name: "현석로그 SNS",
      state: "2026.01~2026.03",
      gitCode: "https://github.com/hyunseok9898?tab=repositories",
      gitLink: "https://hyunseok-log.vercel.app/",
      category: "react",
      img: "hyunseok-log",
      skill: [
        "React",
        "TypeScript",
        "Supabase",
        "Zustand",
        "Tanstack Query",
        "Tailwind CSS",
      ],
      text: `React.js + TypeScript + Supabase로 만든 SNS입니다. \n 로그인시 테스트 아이디 : 123@123.com \n 비밀번호 : 123456 `,
    },
    {
      id: "3",
      name: "예비집사 판별기",
      state: "2025.11",
      gitCode: "https://github.com/hyunseok9898/mbtitest_ts",
      gitLink: "https://mbtitest-ts-one.vercel.app/",
      category: "react",
      img: "mbti_ts",
      skill: [
        "React",
        "TypeScript",
        "Kakao-api",
        "styled-components",
        "react - router",
        "react-bootstrap",
      ],
      text: "React와 TypeScript로 만들어진 mbti별 집사 판별 사이트입니다.\n  결과 페이지에서 공유하기 버튼을 눌러 카카오톡으로 공유할 수 있습니다.",
    },
    {
      id: "4",
      name: "나의 포트폴리오",
      state: "2025.08~2025.10",
      gitCode: "https://github.com/hyunseok9898/my-portfolio",
      gitLink: "https://my-portfolio-kappa-beryl-24.vercel.app/",
      category: "react",
      img: "my-portfolio",
      skill: [
        "React",
        "TypeScript",
        "framer-motion",
        "styled-components",
        "Recoil",
      ],
      text: "React로 만들어진 포트폴리오 사이트입니다.",
    },
    {
      id: "5",
      name: "todolist",
      state: "2025.02",
      gitCode: "https://github.com/hyunseok9898/todolist",
      gitLink: "https://todolist-murex-one-68.vercel.app/",
      category: "react",
      img: "todolist",
      skill: ["React", "TypeScript", "useContext", "styled-components"],
      text: "React와 TypeScript로 만들어진 todolist입니다.",
    },
    {
      id: "6",
      name: "폭스바겐_리뉴얼",
      state: "2023.06~2023.08",
      gitCode: "https://github.com/hyunseok9898/VolksWagen_Renewal",
      gitLink: "https://hyunseok9898.github.io/VolksWagen_Renewal/",
      category: "js",
      img: "volkswagen",
      skill: ["HTML", "CSS", "JavaScript"],
      text: "폭스바겐코리아 웹사이트 리뉴얼 팀 프로젝트입니다. 카카오api를 사용하여 지도에 서비스센터 찾기가 가능합니다. 서브페이지는 전기차 충전, 서비스센터 찾기 2개 있습니다. 이 웹은 반응형입니다. ",
    },
    {
      id: "7",
      name: "내일투어_리뉴얼",
      state: "2023.04",
      gitCode: "https://github.com/hyunseok9898/naeiltour-renewal",
      gitLink: "https://hyunseok9898.github.io/naeiltour-renewal/",
      category: "js",
      img: "naeiltour",
      skill: ["HTML", "CSS", "JavaScript"],
      text: "내일투어 웹사이트 리뉴얼 프로젝트입니다. 퍼블리싱 위주로 작업하였습니다",
    },
  ];

  await createProjectsBatch(data);
};
