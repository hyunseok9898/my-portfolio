import { initializeApp } from "firebase/app";
import {
  getDocs,
  getFirestore,
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import { DocumentData } from "firebase/firestore/lite";

// ✅ 환경 변수로부터 Firebase 설정값 가져오기
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// ✅ Firebase 앱 초기화 및 Firestore 참조 생성
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// 🔹 프로젝트 목록 읽어오기
export const fetchProject = async (): Promise<DocumentData> => {
  const projectCollection = collection(db, "Projects");
  const snapshot = await getDocs(projectCollection);
  return snapshot;
};

export const fetchBoard2 = async () => {
  const citiesRef = collection(db, "Projects");
  await setDoc(doc(citiesRef, "1"), {
    id: "1",
    name: "깃 허브 이슈페이지",
    state: "2025.02~2025.03",
    gitCode: "https://github.com/hyunseok9898/github-issue",
    gitLink: "https://github-issue-dun.vercel.app/",
    category: "react",
    img: "github-issue",
    skill: ["React", "react-query", "react - router", "api", "axios"],
    text: "React를 활용한 깃 허브 이슈페이지입니다. New Issue 버튼을 통해 새로운 Isuue생성이 가능합니다.",
  });

  await setDoc(doc(citiesRef, "2"), {
    id: "2",
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
      "react - router",
    ],
    text: "React로 만들어진 포트폴리오 사이트입니다. ",
  });

  await setDoc(doc(citiesRef, "3"), {
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
    text: "React와 TypeScript로 만들어진 mbti별 집사 판별 사이트입니다. 결과 페이지에서 공유하기 버튼을 눌러 카카오톡으로 공유할 수 있습니다.",
  });
  await setDoc(doc(citiesRef, "4"), {
    id: "4",
    name: "내일투어_리뉴얼",
    state: "2023.09",
    gitCode: "https://github.com/hyunseok9898/naeiltour-renewal",
    gitLink: "https://hyunseok9898.github.io/naeiltour-renewal/",
    category: "js",
    img: "naeiltour",
    skill: ["HTML", "CSS", "JavaScript"],
    text: "자바스크립트 공부할 때 만들었던 내일투어 리뉴얼 사이트입니다. 서브페이지는 메뉴에 항공과 고객센터 2개 있습니다. 이 웹은 반응형입니다.",
  });
  await setDoc(doc(citiesRef, "5"), {
    id: "5",
    name: "폭스바겐_리뉴얼",
    state: "2023.06~2023.08",
    gitCode: "https://github.com/hyunseok9898/VolksWagen_Renewal",
    gitLink: "https://hyunseok9898.github.io/VolksWagen_Renewal/",
    category: "js",
    img: "volkswagen",
    skill: ["HTML", "CSS", "JavaScript"],
    text: "폭스바겐코리아 웹사이트 리뉴얼 팀 프로젝트입니다. 카카오api를 사용하여 지도에 서비스센터 찾기가 가능합니다. 서브페이지는 전기차 충전, 서비스센터 찾기 2개 있습니다. 이 웹은 반응형입니다. ",
  });

  await setDoc(doc(citiesRef, "6"), {
    id: "6",
    name: "카드 짝 맞추기",
    state: "2022.08",
    gitCode: "https://github.com/kimminseoung/Card-matching-Game",
    gitLink: "https://kimminseoung.github.io/Card-matching-Game",
    category: "js",
    img: "volkswagen",
    skill: ["HTML", "CSS", "JavaScript"],
    text: "",
  });
};
