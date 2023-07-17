// 과정 정보
const courseTitle = "Frontend Developer KIM KYU REE";
const introSkipTime = 15;

// 기능 사용 설정
const useVideoContentsTitle = true; // 비디오 페이지 content Title 노출
const useScript = true;
const useQuizIntro = false;

// 차시정보
const lessonList = [
  { id: 1, title: "차시명입니다." },
  { id: 2, title: "차시명입니다." },
  { id: 3, title: "차시명입니다." },
  { id: 4, title: "차시명입니다." },
  { id: 5, title: "차시명입니다." },
  { id: 6, title: "차시명입니다." },
  { id: 7, title: "차시명입니다." },
  { id: 8, title: "차시명입니다." },
  { id: 9, title: "차시명입니다." },
  { id: 10, title: "차시명입니다." },
  { id: 11, title: "차시명입니다." },
  { id: 12, title: "차시명입니다." },
  { id: 13, title: "차시명입니다." },
  { id: 14, title: "차시명입니다." },
  { id: 15, title: "차시명입니다." },
  { id: 16, title: "차시명입니다." },
  { id: 17, title: "차시명입니다." },
  { id: 18, title: "차시명입니다." },
  { id: 19, title: "차시명입니다." },
  { id: 20, title: "차시명입니다." },
  { id: 21, title: "차시명입니다." },
  { id: 22, title: "차시명입니다." },
  { id: 23, title: "차시명입니다." },
  { id: 24, title: "차시명입니다." },
  { id: 25, title: "차시명입니다." },
  { id: 26, title: "차시명입니다." },
  { id: 27, title: "차시명입니다." },
  { id: 28, title: "차시명입니다." },
  { id: 29, title: "차시명입니다." },
  { id: 30, title: "차시명입니다." },
  ,
];

// 페이지(인덱스) 설정 - pageGroup : 페이지를 그룹, pageInfo : 페이지 정보
const pageGroup = [
  { groupId: 1, groupTitle: "Front-end", group: [1] },
  { groupId: 2, groupTitle: "Developer", group: [2] },
  { groupId: 3, groupTitle: "KIM KYU REE", group: [3, 4] },
];
const pageInfo = [
  {
    id: 1,
    type: "videoPage",
    subType: "video-i",
    title: "주제 & 목표",
    subTitle: "",
  },
  {
    id: 2,
    type: "videoPage",
    subType: "video",
    title: "본 학습",
    subTitle: "",
  },
  {
    id: 3,
    type: "quizPage",
    subType: "quiz",
    title: "평가",
    subTitle: "이번시간에 배운 내용을 바탕으로 퀴즈를 풀어보세요.",
  },
  {
    id: 4,
    type: "videoPage",
    subType: "video-o",
    title: "정리 & 맺음",
    subTitle: "이번 시간에 학습한 주요 내용을 확인해 보세요.",
  },
];
// type 종류 : video (영상), page (영상이 아닐 경우)
// subType 종류 : video-i (인트로 영상), video (본문 영상), video-o (아웃트로 영상), quiz (퀴즈 페이지)
// subTitle은 컨텐츠 타이틀의 설명입니다.

// 퀴즈 정보 및 설정
const quizChanceInit = 3;
let quizChance = quizChanceInit;
let currentQuizNum = 1;
let myQuizResult = [];
let myQuizAnswer = [];

// 학습도우미 설정
let currentHelpPage = 1;
let currentPopSubPage = 1;
const helpInfo = [
  { id: 1, type: "learningMap", title: "러닝맵", totalPage: 2 },
  { id: 2, type: "pageView", title: "화면 안내", totalPage: 1 },
  { id: 3, type: "keyControll", title: "키보드 제어", totalPage: 1 },
];
